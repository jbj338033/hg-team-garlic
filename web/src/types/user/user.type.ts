export interface UserType {
  username: string;
  analysis: {
    location: string;
    hasMoney: boolean | null;
    hasLand: boolean | null;
    hasResidence: boolean | null;
    hasExperience: boolean | null;
    hasIdea: boolean | null;
    hasStudied: boolean | null;
  };
  isCompleted: boolean;
}