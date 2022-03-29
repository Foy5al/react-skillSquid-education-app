import { useEffect, useState } from 'react';

const useData = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function getData() {
            await fetch('../../fakedata/courseData.json')
                .then(resp => resp.json())
                .then(data => setCourses(data.courses));
        }
        getData();
    }, []);
    return [courses];
}

export default useData;

/* 
async function getData() {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  getData(); */