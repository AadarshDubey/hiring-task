import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionDetailsForm from "./RequisitionDetailsForm";
import PreviewCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from "../../interface/forms";
import { useData } from "./DataProvider";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);
  const { state, setState } = useData();

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };

  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionDetailsForm
                  handleTab={handlePage}
                  previewData={{
                    requisitionTitle: state.jobDetails.jobTitle,
                    noOfOpenings: state.requisitionDetails.noOfOpenings,
                    urgency: state.requisitionDetails.urgency,
                    gender: state.requisitionDetails.gender,
                  }}
                  setPreviewData={(data) =>
                    setState({
                      ...state,
                      requisitionDetails: {
                        ...state.requisitionDetails,
                        ...data,
                      },
                    })
                  }
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm
                  handleTab={handlePage}
                  previewData={{
                    requisitionTitle: state.jobDetails.jobTitle,
                    noOfOpenings: state.requisitionDetails.noOfOpenings,
                    urgency: state.requisitionDetails.urgency,
                    gender: state.requisitionDetails.gender,
                  }}
                  setPreviewData={(data) =>
                    setState({
                      ...state,
                      jobDetails: {
                        ...state.jobDetails,
                        ...data,
                      },
                    })
                  }
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm
                  handleTab={handlePage}
                  
                  setPreviewData={(data) =>
                    setState({
                      ...state,
                      interviewSettings: {
                        ...state.interviewSettings,
                        ...data,
                      },
                    })
                  }
                />
              </TabPanel>
            </TabPanels>
            <PreviewCard
              requisitionDetails={{
                requisitionTitle: state.jobDetails.jobTitle,
                noOfOpenings: state.requisitionDetails.noOfOpenings,
                urgency: state.requisitionDetails.urgency,
                gender: state.requisitionDetails.gender,
              }}
              jobDetails={{
                jobTitle: state.jobDetails.jobTitle,
                jobDetails: state.jobDetails.jobDetails,
                jobLocation: state.jobDetails.jobLocation,
              }}
              interviewSettings={{
                interviewDuration: state.interviewSettings.interviewDuration,
                interviewLanguage: state.interviewSettings.interviewLanguage,
                interviewMode: state.interviewSettings.interviewMode,
              }}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;