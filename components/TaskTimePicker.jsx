import {
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { styled } from '@mui/material/styles';

import { tooltipClasses } from '@mui/material/Tooltip';
import { Icon } from '@iconify/react';
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: `rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`,
    // boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  zIndex: '5',
}));
/* <<--------------------------------------------------------->> */
/* <<--------------------------------------------------------->> */
const TaskTimePicker = (props) => {
  /* <<--------------------------------------------------------->> */
  const { disabled, endTime, onSave, onToggle, open } = props;

  /* <<--------------------------------------------------------->> */
  const handleOpen = () => {
    onToggle(true);
  };
  const handleClose = () => {
    onToggle(false);
  };
  const getFormattedStartEndTime = () => {
    const f_end = moment(endTime).toObject();

    if (!f_end) {
      console.log('No time !');
      return 'Select time';
    }
    let hours = moment(endTime).format('LT');

    return `${hours}`;
  };
  const handleSaveTime = (end) => {
    const target_date = '2022-08-19';
    const target_date_obj = moment(target_date).toObject();
    const end_time = moment(end).toISOString();
    console.log(end_time, 'original iso');
    const clone_end_time = { ...moment(end).toObject() };
    console.log(clone_end_time, 'clone_end_time');
    console.log(target_date_obj, 'target_date_obj');

    const manipulated = moment(end_time)
      .year(target_date_obj.years)
      .month(target_date_obj.months)
      .date(target_date_obj.date);
    const formatted_manipulated_end_date = moment(manipulated).toISOString();
    console.log(formatted_manipulated_end_date, 'manip');
    /* pass this manipulated to api */
    if (!end_time) {
      console.log('No time !');
      return;
    }
    if (end_time === 'Invalid date') {
      console.log('Invalid time !');
      return;
    }
    console.log('CONTINUE');
    onSave(end_time);
  };

  /* <<--------------------------------------------------------->> */
  return (
    <div>
      <span style={{ width: 'fit-content' }}>
        <LightTooltip
          open={open}
          title={
            <>
              <PickerComponent
                endTime={endTime}
                onSave={handleSaveTime}
                onClose={handleClose}
              />
            </>
          }
        >
          <Typography
            sx={{ width: 'fit-content' }}
            onClick={handleOpen}
            className='time-display'
          >
            {getFormattedStartEndTime()}
          </Typography>
        </LightTooltip>
      </span>
      {/* <button onClick={getFormattedStartEndTime}>add</button> */}
    </div>
  );
};

export default TaskTimePicker;

const PickerComponent = (props) => {
  const [endTime, setEndTime] = useState(props.endTime);
  /* <<--------------------------------------------------------->> */

  const onChangeEndTime = (newValue) => {
    const iso_string_format = moment(newValue).toISOString();
    setEndTime(newValue);
  };
  /* <<--------------------------------------------------------->> */

  return (
    <div id='task-time-picker'>
      <Stack spacing={3} sx={{ px: 2, py: 1.5 }}>
        <Stack direction='row' alignItems='center' justifyContent='flex-end'>
          <Icon
            onClick={props.onClose}
            className='pointer'
            icon='akar-icons:cross'
            height='0.8rem'
            width='0.8rem'
          />
        </Stack>
        <div className='end-time'>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopTimePicker
              label='End Time'
              views={['hours', 'minutes']}
              value={endTime}
              onChange={(newValue) => {
                onChangeEndTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} size='small' />}
            />
          </LocalizationProvider>
        </div>
        <Stack direction='row' alignItems='center' justifyContent='center'>
          <Button
            onClick={() => props.onSave(endTime)}
            size='small'
            variant='contained'
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
