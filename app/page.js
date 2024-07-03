'use client';
import Header from "../components/header";
import BlogList from "../components/BlogList";
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Home() {
  return (
    <>
    <ToastContainer theme="dark" />
    <Header/>
    <BlogList />
    <Footer/>
    </>
  );
}
