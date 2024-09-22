import React, {useEffect} from "react";
import {Grid, Icon, Paper, TextField, Typography} from "@mui/material";
import {resumeData} from "../../utils/resumeData";
import {
    CustomTimeline, CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import {TimelineContent, TimelineItem} from "@mui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import SchoolIcon from "@mui/icons-material/School";
import "./Resume.css";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
    return (<>
            <Grid container className="section pb_45 pt_45" data-aos-delay="600" data-aos="zoom-out">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <Typography className="section_title_text" variant="h6">
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="about_me_text">
                        {resumeData.about_me.paragraph}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container data-aos-delay="1200" data-aos="zoom-in-right" className="section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_time_line">
                        {/* Exp */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Work Experience" icon={<WorkIcon/>}>
                                {resumeData.experience.map((experience, index) => (<TimelineItem key={index}>
                                        <CustomTimelineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {experience.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="timeline_description"
                                            >
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Education" icon={<SchoolIcon/>}>
                                {resumeData.education.map((education, index) => (<TimelineItem key={index}>
                                        <CustomTimelineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">
                                                {education.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date">
                                                {education.date}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                className="timeline_description"
                                            >
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className="section pb_45" data-aos-delay="600" data-aos="zoom-out">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">My Services</h6>
                </Grid>

                <Grid item xs={12} data-aos="fade-left" data-aos-delay="600">
                    <Grid container spacing={3} justifyContent={"space-around"}>
                        {resumeData.services.map((service) => (<Grid item xs={12} sm={6} md={3} key={service.id}>
                                <div className="service">
                                    <Icon className="service_icon">{service.icon}</Icon>
                                    <Typography className="service_title" variant="h6">
                                        {service.title}
                                    </Typography>
                                    <Typography className="service_description" variant="body2">
                                        {service.description}
                                    </Typography>
                                </div>
                            </Grid>))}
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className="section graybg pb_45 p_50">
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between" spacing={3}>
                        {resumeData.skills.map((skills, index) => (<Grid item key={index} xs={12} sm={6} md={3}>
                                <Paper elevation={0} className="skill">
                                    <Typography variant="h6" className="skills_title">
                                        {skills.title}
                                    </Typography>
                                    {skills.description.map((element, elementIndex) => (<Typography
                                            key={elementIndex}
                                            variant="body2"
                                            className="skill_description"
                                        >
                                            <TimelineDot variant="outlined" className="timeline_dot"/>
                                            {element}
                                        </Typography>))}
                                </Paper>
                            </Grid>))}
                    </Grid>
                </Grid>

            </Grid>

            <Grid container spacing={5} className='section pt_45 pb_45'>
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name'/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail'/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='message' label='Message' multiline rows={3}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text='Submit'/>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className='section_title_text'>Contact Information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item>
                                    <Typography className='contactInfo_item'>
                                        <span>Address: </span> {resumeData.personal_details.address}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className='contactInfo_item'>
                                        <span>Phone: </span> {resumeData.personal_details.phone}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className='contactInfo_item'>
                                        <span>Email: </span> {resumeData.personal_details.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contactInfo_socialsContainer'>
                                {Object.keys(resumeData.social).map((key,index)=>(
                                    <Grid item className='contactInfo_social'>
                                    <a href={resumeData.social[key].link}>
                                        {resumeData.social[key].icon}
                                    </a>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </>);
};

export default Resume;
