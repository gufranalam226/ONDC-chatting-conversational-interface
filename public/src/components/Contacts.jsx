import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    console.log(index)
    setCurrentSelected(index);
    changeChat(contact);
  };
  const changeCurrentChatAll = (index, contact) => {
    setCurrentSelected(index);
    const gufranContact = contacts.find(contact => contact.username === "gufranalam226");
    if (gufranContact) {
      changeChat(gufranContact);
    } else {
      console.error("User gufranalam226 not found in contacts.");
    }
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          
          <div className="brand">
          <div class="backbtn"><button><a href="http://localhost:9000/shop-detail.html">Back to website</a></button></div>
            <img src={Logo} alt="logo" />
            <h3>Haikyu</h3>
          </div>
          {
          <div className="contacts">
            {contacts.map((contact, index) => 
            {if(currentUserName === "gufranalam226"){
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            }
            else{
              return (
                <div
                  key={contact._id}
                  // className={`contact ${
                  //   index === currentSelected ? "selected" : ""
                  // }`}
                  onLoad={() => changeCurrentChatAll( index, contact)}
                 >
                  <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="image" />
                  </div>
                  
                </div>
               
              );
            }

            
            
            })}
          </div>}
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
.backbtn {
  
    button{
    background-color: blue;
    height: 30px;
    padding : 3px 8px;
    border-radius: 8px;
    border: none;
    a{
      color : white;
      text-decoration: none;
      
    font-size: 1.1rem
  }
}
    
  }
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: rgb(155 216 141);
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    background-color: rgb(195 216 141);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
