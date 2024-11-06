import { FormControlProps, InputProps } from "@chakra-ui/react";
import { FormikErrors, FormikTouched } from "formik";

export interface IFormInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string | FormikErrors<any>; // Simplified error type
  touched?: boolean | FormikTouched<any>; // Simplified touched type
  inputProps?: InputProps;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
}

export type ISelectOption = {
  label: string;
  value: any;
} | null;

export interface IRequisitionDetailsValues {
  requisitionTitle: string;
  owner: string;
  hiringManager: string;
  noOfOpenings: number; // Changed to number for consistency
  urgency: string;
  employmentType: string;
  preferredGender: string; // Fixed spelling: "preffered" -> "preferred"
  status: string;
}

export interface IJobDetailsValues {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IInterviewSettingsValues {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

export interface IInterViewSettings {
  interviewMode: string;
  interviewDuration: string;
  interviewLanguage: string;
}

export interface IJobDetails {
  jobTitle: string;
  jobDetails: string;
  jobLocation: string;
}

export interface IRequisitionDetails {
  requisitionTitle: string;
  noOfOpenings: number;
  urgency: string;
  gender: string;
}
