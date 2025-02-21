import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_z7odhyo',
        'template_k3nlaca',
        templateParams,
        'iJDAzNOEwBGgU0UTu'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Get in touch with us</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <HiLocationMarker className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>IIT Campus, Colombo</p>
                </div>
              </div>

              <div className="contact-item">
                <FiMail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ceilaogrid@gmail.com">ceilaogrid@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
