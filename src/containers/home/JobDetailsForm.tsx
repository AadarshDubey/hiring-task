import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IJobDetails, IRequisitionDetails } from "../../interface/forms";
import { useData } from "./DataProvider";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
  previewData: IRequisitionDetails;
  setPreviewData: React.Dispatch<React.SetStateAction<IRequisitionDetails>>;
}> = ({ handleTab, previewData, setPreviewData }) => {
  const { state, setState } = useData();

  const { handleChange, errors, touched, handleBlur, handleSubmit, values } =
    useFormik<IJobDetails>({
      initialValues: state.jobDetails,
      validationSchema: Yup.object().shape({
        jobTitle: Yup.string().required("Job Title is required"),
        jobDetails: Yup.string().required("Job Details is required"),
        jobLocation: Yup.string().required("Job Location is required"),
      }),
      onSubmit: (values) => {
        setState({ ...state, jobDetails: values });
        setPreviewData({
          ...previewData,
          requisitionTitle: values.jobTitle,
        });
        handleTab(2);
      },
    });

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          onChange={(e) => {
            handleChange(e);
            setPreviewData({ ...previewData, requisitionTitle: e.target.value });
          }}
          onBlur={handleBlur}
          value={values.jobTitle}
          error={errors.jobTitle}
          touched={touched.jobTitle}
        />
        <FormInput
          label="Job Details"
          placeholder="Enter job details"
          name="jobDetails"
          onChange={(e) => {
            handleChange(e);
            setPreviewData({ ...previewData, });
          }}
          onBlur={handleBlur}
          value={values.jobDetails}
          error={errors.jobDetails}
          touched={touched.jobDetails}
        />
        <FormInput
          label="Job Location"
          name="jobLocation"
          placeholder="Enter job location"
          onChange={(e) => {
            handleChange(e);
            setPreviewData({ ...previewData, jobLocation: e.target.value });
          }}
          onBlur={handleBlur}
          error={errors.jobLocation}
          touched={touched.jobLocation}
          value={values.jobLocation}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(0)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailsForm;