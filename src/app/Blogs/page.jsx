import Image from 'next/image';
import React from 'react';

const Blogs = () => {
    return (
        <div>
           <h1>This is Blog Page</h1> 
           <Image width={200} height={150} src="https://i.ibb.co/JQKvzWz/grad-student-with-arms-in-the-air-1.jpg" />
           <Image width={200} height={150} src="https://images.pexels.com/photos/17067233/pexels-photo-17067233/free-photo-of-dust-over-galloping-horses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </div>
    );
};

export default Blogs;