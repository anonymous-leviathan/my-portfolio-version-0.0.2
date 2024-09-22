import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";

import { CustomTimeline, CustomTimelineSeparator } from "../Timeline/Timeline";
import image1 from "../../assets/images/100486080.jpeg";
import { resumeData } from "../../utils/resumeData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded"; //TODO 5:26 ============================================================================================================

//TODO 11 video 27:19

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">
          {resumeData.personal_details.name}
        </Typography>
        <Typography className="title">
          {resumeData.personal_details.title}
        </Typography>
      </div>
      <figure className="profile_image">
        <img src={image1} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<AccountCircleIcon />}>
          <CustomTimelineItem
            title="Name:"
            text={resumeData.personal_details.name}
          />
          <CustomTimelineItem
            title="Title:"
            text={resumeData.personal_details.title}
          />
          <CustomTimelineItem
            title="Email:"
            text={resumeData.personal_details.email}
          />

          {Object.keys(resumeData.social).map((key) => (
            <CustomTimelineItem
              key={key}
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton
            text={"Download CV"}
            icon={<DownloadForOfflineRoundedIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
