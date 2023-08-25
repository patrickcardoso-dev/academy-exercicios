import './styles.css';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import { teachers } from '../../data';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeacherDetails = () => {
  const { id } = useParams();
  const [allTeachers, setAllTeachers] = useState([...teachers]);
  const [currentTeacher, setCurrentTeacher] = useState({});


  useEffect(() => {
    const findTeacher = allTeachers.find((teacher) => teacher.id === parseInt(id, 10));

    if (!findTeacher) return;

    setCurrentTeacher(findTeacher);
  }, []);

  return (
    <div className='container teacher-detail-container'>
      <Header showBack />

      <div className='teacher-detail'>
        <Avatar image={currentTeacher.avatar} />
        <h1>{currentTeacher.name}</h1>
        <span>{currentTeacher.stack}</span>

        <div className='horizontal-line'></div>

        <h3>Bio</h3>
        <p>{currentTeacher.bio}</p>
      </div>
    </div>
  );
};

export default TeacherDetails