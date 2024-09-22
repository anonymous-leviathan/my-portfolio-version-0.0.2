import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';
import {resumeData} from "../../utils/resumeData";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <Typography className='footer_name'>{resumeData.personal_details.name}</Typography>
            </div>

            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Developed By{' '}
                    <a href='/' target='_blank' rel='noopener noreferrer'>
                        mr.Gunawardhana
                    </a>
                    <br />
                    Clone idea from{' '}
                    <a href='https://themeforest.net/user/tavonline' target='_blank' rel='noopener noreferrer'>
                        Travoline
                    </a>
                    .
                </Typography>
            </div>
        </div>
    );
};

export default Footer;
