import { UserDetails } from '../../user-details/state/user-details.model';

export type Condition = {
  code: string;
  name: string;
  userDetails: UserDetails[];
};

export type ConditionUI = {
  userDetails: string[];
}
