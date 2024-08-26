package com.goodfarm.global.security.jwt.provider;

import com.goodfarm.domain.user.domain.entity.User;
import com.goodfarm.domain.user.error.UserError;
import com.goodfarm.domain.user.repository.UserRepository;
import com.goodfarm.global.error.CustomException;
import com.goodfarm.global.security.details.CustomUserDetails;
import com.goodfarm.global.security.jwt.config.JwtProperties;
import com.goodfarm.global.security.jwt.dto.Jwt;
import com.goodfarm.global.security.jwt.enums.JwtType;
import com.goodfarm.global.security.jwt.error.JwtError;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private final JwtProperties jwtProperties;
    private final UserRepository userRepository;
    private SecretKey key;

    @PostConstruct
    protected void init() {
        key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtProperties.getSecretKey()));
    }

    public Jwt generateToken(User user) {
        Date now = new Date();

        String accessToken = Jwts.builder()
                .setHeaderParam(Header.JWT_TYPE, JwtType.ACCESS)
                .setSubject(user.getUsername())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + jwtProperties.getAccessTokenExpiration()))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        return new Jwt(accessToken);
    }

    public Authentication getAuthentication(String token) {
        Jws<Claims> claims = getClaims(token);

        if (getType(token) != JwtType.ACCESS) {
            throw new CustomException(JwtError.INVALID_TOKEN_TYPE);
        }

        User user = userRepository.findByUsername(claims.getBody().getSubject()).orElseThrow(() -> new CustomException(UserError.USER_NOT_FOUND));

        UserDetails details = new CustomUserDetails(user);

        return new UsernamePasswordAuthenticationToken(details, null, details.getAuthorities());
    }

    public String extractToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");

        if (StringUtils.hasText(token) && token.startsWith("Bearer ")) {
            return token.substring(7);
        }

        return null;
    }

    public String getSubject(String token) {
        return getClaims(token).getBody().getSubject();
    }

    private Jws<Claims> getClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
        } catch (ExpiredJwtException e) {
            throw new CustomException(JwtError.EXPIRED_TOKEN);
        } catch (UnsupportedJwtException e) {
            throw new CustomException(JwtError.UNSUPPORTED_TOKEN);
        } catch (MalformedJwtException e) {
            throw new CustomException(JwtError.MALFORMED_TOKEN);
        } catch (IllegalArgumentException e) {
            throw new CustomException(JwtError.INVALID_TOKEN_TYPE);
        }
    }

    public JwtType getType(String token) {
        return JwtType.valueOf(Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getHeader()
                .get(Header.JWT_TYPE).toString()
        );
    }
}
