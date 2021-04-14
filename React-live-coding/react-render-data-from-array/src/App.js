import React from "react";
import User from "./User";
/* import Header from "./Header";
import Navbar from "./Navbar"; */

function App() {
  let data = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];

  let data2=[
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg"
      },
      {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
      },
      {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg"
      }
  
  ]

  let UsersProfile = data.map((user) => {
    return (
      <User user={user}/>
    );
  });

  let userProfile2= data2.map((user) => {
    return (
      <User user={user}/>
    );
  });
  console.log(UsersProfile);

  let thirdUser={
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg"
    }
  return (
    <div className="App">
      <h1>Users Profile</h1>
      <div>{UsersProfile}</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam maxime commodi quos fugiat laudantium, quibusdam voluptates, ullam quasi illo neque dicta impedit quaerat. Provident officiis quis voluptatem. Eum aperiam illum eaque et, quia possimus accusantium dolorem voluptas, quisquam, placeat beatae debitis eos id architecto dolore dolor. Architecto, sed ut incidunt libero accusantium nam pariatur velit repudiandae culpa. Earum facere perferendis facilis obcaecati voluptatem repellendus architecto voluptatum temporibus provident. Asperiores, libero nisi! Placeat laudantium cumque recusandae ratione voluptatum distinctio mollitia explicabo earum, tenetur sapiente, quod architecto, nostrum nam! Nostrum nam sapiente excepturi possimus perferendis ex commodi voluptatum reiciendis libero similique.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam maxime commodi quos fugiat laudantium, quibusdam voluptates, ullam quasi illo neque dicta impedit quaerat. Provident officiis quis voluptatem. Eum aperiam illum eaque et, quia possimus accusantium dolorem voluptas, quisquam, placeat beatae debitis eos id architecto dolore dolor. Architecto, sed ut incidunt libero accusantium nam pariatur velit repudiandae culpa. Earum facere perferendis facilis obcaecati voluptatem repellendus architecto voluptatum temporibus provident. Asperiores, libero nisi! Placeat laudantium cumque recusandae ratione voluptatum distinctio mollitia explicabo earum, tenetur sapiente, quod architecto, nostrum nam! Nostrum nam sapiente excepturi possimus perferendis ex commodi voluptatum reiciendis libero similique.</p>
      <div>{userProfile2}</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit voluptatum ab expedita modi illum vitae et esse enim reprehenderit. Rem, saepe. Recusandae error illo adipisci dignissimos hic ratione aperiam accusantium, impedit libero cum commodi explicabo voluptatum corporis. Harum consequuntur distinctio, illum possimus ipsam officiis nemo quae? Fugiat iure provident quaerat optio delectus, deleniti exercitationem fugit neque. Quaerat, quia fugit eius blanditiis corporis consequatur ut unde maxime, atque quis voluptates minus vero est ipsam minima alias sunt magnam soluta beatae? Ducimus dolor, magnam voluptas corporis repellendus amet dolorum non repudiandae nulla. Consequatur delectus numquam, minus animi ratione excepturi obcaecati reprehenderit?</p>
    <User user={thirdUser}/>
    </div>
  );
}

export default App;
