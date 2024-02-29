import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    customTooltip: {
        maxWidth: 350,
        backgroundColor: theme.palette.common.white,
        color: 'rgba(17, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
        fontWeight: 600
    }
}));

function Para(props) {
    const classes = useStyles();

    const renderTextWithTooltips = () => {
        const words = props.children.split(' ');
        return words.map((word, index) => {
            const tooltipData = props.tooltips.find(item => item.word === word);
            if (tooltipData) {
                return (
                    <React.Fragment key={index}>
                        <Tooltip 
                        key={index} 
                        title={tooltipData.tooltip} 
                        arrow 
                        classes={{ tooltip: classes.customTooltip }} 
                        placement='top'>
                            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{word}</span>
                        </Tooltip>
                        {' '} {/* Add space after the word */}
                    </React.Fragment>
                );
            } else {
                return word + ' ';
            }
        });
    };

    return (
        <Typography variant="h6" paragraph={true} align={props.align ? props.align : 'justify'}>
            {props.tooltips ? renderTextWithTooltips() : props.children}
        </Typography>
    );
}

export default Para;



{/* <CustPara tooltips={[
                            { word: "expenditures", tooltip: "This is an example tooltip." },
                            { word: "conditions", tooltip: "This is another tooltip." }
                        ]}>
                            {ctx.chapterOne.Profile.para7}
                        </CustPara> */}
