import React from 'react';
import Navbars from './Components/Navbars/Navbars';
import Cards from './Components/Cards/Cards';

const App = () => {

  const pricingData = [
    {
      id: 1,
      title: "FREE",
      price: "$0/Monthly",
      user: "Single User",
      storage: "10 GB SSD",
      email: "5 Email Accounts",
      support: "Email Support",
      projectIcon: "fa fa-check",
      text: "text-muted"
    },
    {
      id: 2,
      title: "Starter",
      price: "$5/Monthly",
      user: "2 User Accounts",
      storage: "20 GB SSD",
      email: "15 Email Accounts",
      support: "Chat/Email Support",
      projectIcon: "fa fa-xmark",
      text: "text-muted"
    },
    {
      id: 3,
      title: "Business",
      price: "$25/Monthly",
      user: "10 User Accounts",
      storage: "50 GB SSD",
      email: "Unlimited Email Accounts",
      support: "Call, Email, Chat Dedicated Support",
      projectIcon: "fa fa-check",
      text: "text-muted"
    }
  ]
  return (
    <>
    <Navbars />
    <Cards pricingData={pricingData} />
    </>
  );
};

export default App;