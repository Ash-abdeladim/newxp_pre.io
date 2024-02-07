import React ,{useState} from 'react';
import close from "close.svg"
import axios from 'axios';


const Modals = ({ onClose }) => {
    const countwidth = window.innerWidth;
    const wdth = countwidth - 50;
    const styling = {
        width: wdth
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/send-email', formData);
            alert('Email sent successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to send email');
        }
    };
    return (
        <div className="modal" style={styling}>
            <div className="modal-content">
                <span className="close" onClick={onClose}><img src={close} alt="close" /></span>
                <h2>Contact Us</h2>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                        <br/>
                        <br/>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        <br/>
                        <br/>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                        <br/>
                        <br/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Modals;