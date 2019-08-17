// @flow
import {
  CHANGE_SEARCH,
  REQUESTED,
  REQUESTED_SUCCEEDED,
  FETCH_PROJECT
} from './constants';

export const changeSearch = (text: string) => ({ type: CHANGE_SEARCH, text });
export const requestGithub = () => ({ type: REQUESTED });
export const onRequestSuccess = (data: {}) => ({ type: REQUESTED_SUCCEEDED, data });
export const fetchProject = (search: string) => ({ type: FETCH_PROJECT, search });
