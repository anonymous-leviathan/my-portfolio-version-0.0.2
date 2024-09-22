import React, { useState } from "react";
import "./Portfolio.css";
import {
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Tabs,
    Tab,
} from "@mui/material";
import { YouTube } from '@mui/icons-material'; // Importing YouTube icon
import CardItem from "./CardItemForProjects"; // Importing your CardItem component

const projectsList = [
    {
        id: 1,
        tag: "React",
        images: [""],  // Add image URLs if available
        title: "TPS Admin Dashboard",
        caption: "Backend development for an ERP system.",
        description: `I contributed to an ERP project for a Singapore-based client, focusing on backend development. My primary responsibility was integrating Airwallex APIs to facilitate a digital wallet solution. I utilized Spring Boot microservices for robust backend functionality and PostgreSQL for database management. Collaborated with the front-end team using React and Material-UI to ensure a seamless and intuitive user experience. I also used AWS for deployment and Git for version control.`,
        links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
        ],
    },
    {
        id: 2,
        tag: "React",
        images: [""],  // Add image URLs if available
        title: "Live Aquaria Admin Panel",
        caption: "Frontend development for a large ERP solution.",
        description: `I worked on the frontend development for a large ERP solution for a US client. Using React, the React Fuse template, and Material-UI, I created responsive, user-friendly interfaces that enhanced the user experience. This project required optimizing performance, ensuring cross-platform compatibility, and delivering an engaging UI. I closely collaborated with backend developers to integrate the frontend components seamlessly into the larger system architecture.`,
        links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
        ],
    },
    {
        id: 3,
        tag: "Spring Boot",
        images: [""],  // Add image URLs if available
        title: "DTE Application Migration",
        caption: "Migrating legacy applications for Dialog Axiata PLC.",
        description: `I was part of a team migrating legacy Dialog DTE applications to modern microservices architecture. My responsibilities included querying large-scale Oracle databases and developing Spring Boot microservices that handled system logic. Due to confidentiality, specific details are restricted, but the project enhanced my skills in system integration, database management, and enterprise-level backend development.`,
        links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
        ],
    },
    {
        id: 4,
        tag: "Spring Boot",
        images: [""],  // Add image URLs if available
        title: "eZ Cash Admin",
        caption: "Full-stack development for Dialog Axiata PLC.",
        description: `As a full-stack developer on the eZ Cash Admin project, I developed both the front-end using React and the back-end with Spring Boot. I deployed the application using Docker, ensuring scalability, and used advanced Nginx configurations for load balancing. This role required balancing frontend UI development with backend services to ensure seamless communication between both layers.`,
        links: [
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
            { link: "https://www.google.com", icon: <YouTube /> },
        ],
    },
];

const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDialog = () => {
        setSelectedProject(null);
    };

    return (
        <Grid container spacing={1} className="section pb_45 pt_45">
            {/* Portfolio Section Title */}
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor="white"
                    className="customTabs"
                    onChange={handleTabChange}
                >
                    <Tab
                        label="All"
                        value="All"
                        className={tabValue === "All" ? "customTabs_item active" : "customTabs_item"}
                    />
                    {[...new Set(projectsList.map((item) => item.tag))].map((tag) => (
                        <Tab
                            label={tag}
                            value={tag}
                            key={tag}
                            className={tabValue === tag ? "customTabs_item active" : "customTabs_item"}
                        />
                    ))}
                </Tabs>
            </Grid>

            {/* Projects List */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {projectsList.map((project) => (
                        <>
                            {tabValue === project.tag || tabValue === "All" ? (
                                <CardItem key={project.id} cardDetails={project} onClick={() => handleCardClick(project)} />
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>

            {/* Project Dialog */}
            <Dialog
                open={!!selectedProject}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle onClose={handleCloseDialog}>{selectedProject?.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">{selectedProject?.caption}</Typography>
                    <Typography>{selectedProject?.description}</Typography>
                    {/* Links */}
                    {selectedProject?.links.map((linkItem, index) => (
                        <a key={index} href={linkItem.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>
                            {linkItem.icon}
                        </a>
                    ))}
                </DialogContent>
            </Dialog>
        </Grid>
    );
};

export default Portfolio;
