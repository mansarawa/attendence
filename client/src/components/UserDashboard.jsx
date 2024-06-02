import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserDashboard() {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const getUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(getUser);
  const token = JSON.parse(localStorage.getItem('token'));
  const redirect = useNavigate();

  const handleadd = async () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const res = await fetch('http://localhost:3000/addattendance', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
      body: JSON.stringify({
        title: 'present',
        userid: user._id,
        date: currentDate,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setClick(true);
      toast.success('Added successfully');
      fetchAtt(); // Refresh the attendance data
    } else {
      console.log('Not added');
      toast.error('Already Added');
    }
  };

  const fetchAtt = async () => {
    try {
      const res = await fetch('http://localhost:3000/yourattendance', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          token: token,
        },
        body: JSON.stringify({
          userid: user._id,
        })
      });
      const result = await res.json();
      if (result.success) {
        setData(result.attendance);
        console.log('success')
      } else {
        setData([]);
        console.log("unsuccess")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAtt();
  }, []);

  const events = data.map((item) => ({
    title: item.title ,
    start: item.date ,
  }));

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '70%' }}>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" weekends={true} events={events} eventContent={renderEventContent} />
      </div>
      <div>
        <button type="submit" onClick={click ? null : handleadd} className="btn btn-primary">
          Add Present
        </button>
      </div>
     
    </div>
  );
}

function renderEventContent(eventInfo) {
  return <i>{eventInfo.event.title}</i>;
}

export default UserDashboard;
