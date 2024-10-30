import { useState } from "react";
import UpdateProfile from "../Components/UpdateProfile";
import Account from "../Components/Account";
import profile_image from "../Images/profile_avatar.jpg";
import crop1 from "../Images/cocoafarm.jpeg";
import crop2 from "../Images/oilpalm.jpeg";
import crop3 from "../Images/food-crops.jpeg";
import UpdateFeed from "../Components/UpdateFeed";
import Feeds from "../Components/Feeds";

const UserProfile = () => {
  const [profile, setProfile] = useState([
    {
      // profile object
      id: "1",
      phone: "",
      location: "",
      username: "",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintvoluptates tempore atque tempora ipsam nihil quam eligendi iste cumque voluptas.",
      summary: "",
      img: profile_image,
    },
  ]);

  const [feed, setFeed] = useState([
    {
      // feed object
      id:"1",
      image1: crop1,
      image2: crop2,
      image3: crop3,
      title: "",
      description: "",
      price: "",
    },
  ]);

  function profiles(id, newPhone, newLocation, newUsername, newImg, newAbout, newSummary) {
    const profileUpdate = profile.map((newProfile) => {
      if (id === newProfile.id) {
        return {
          ...newProfile,
          phone: newPhone,
          location: newLocation,
          username: newUsername,
          about: newAbout,
          img: newImg,
          summary: newSummary
        };
        // spread operator is used in an object literals here to edit the existing values of the object
      }
      return newProfile;
    });
    setProfile(profileUpdate);
  }

  const feeds = (id, image1, image2, image3, title, description, price) => {
    const addFeed = {
      id:id,
      image1: image1,
      image2: image2,
      image3: image3,
      title: title,
      description: description,
      price: price,
    };
    setFeed([...feed, addFeed]); 
    // this is to add the addFeed object into the feed array using spreed operator in array literals
  };

  return (
    <div className="account">
      <section>
        {profile.map((newProfile) => {
          const updateProfile = (
            <UpdateProfile
              id={newProfile.id}
              phone={newProfile.phone}
              location={newProfile.location}
              username={newProfile.username}
              about={newProfile.about}
              summary={newProfile.summary}
              img={newProfile.img}
              profiles={profiles}
            />
          );

          // variable to add feed

          return (
            <Account
              id={newProfile.id}
              phone={newProfile.phone}
              location={newProfile.location}
              username={newProfile.username}
              about={newProfile.about}
              summary={newProfile.summary}
              img={newProfile.img}
              updateProfile={updateProfile}
            />
          );
        })}
      </section>
      <section>
        {feed.map((myfeed) => {
          return (
            <Feeds
              id={myfeed.id}
              image1={myfeed.image1}
              image2={myfeed.image2}
              image3={myfeed.image3}
              title={myfeed.title}
              description={myfeed.description}
              price={myfeed.price}
            />
          );
        })}
      </section>
      <section className="my-5 px-5">
        <UpdateFeed feeds={feeds} />
      </section>
    </div>
  );
};
export default UserProfile;
