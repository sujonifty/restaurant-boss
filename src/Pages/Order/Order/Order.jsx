import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Share/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    const  [tabIndex,setTabIndex]=useState(0);
    return (
        <div>
            <Cover img={orderImg} title="order food"></Cover>

            <Tabs defaultIndex={tabIndex} selected={(index)=>setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Order;