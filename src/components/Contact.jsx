import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_z7odhyo',
        'template_k3nlaca',
        templateParams,
        'iJDAzNOEwBGgU0UTu'
      );

      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        message: `Dear ${formData.name},

Thank you for contacting Ceilão.Grid. We have received your message and will get back to you shortly.

Best regards,
The Ceilão.Grid Team`
      };

      await emailjs.send(
        'service_z7odhyo',
        'YOUR_AUTOREPLY_TEMPLATE_ID',
        autoReplyParams,
        'iJDAzNOEwBGgU0UTu'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
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
          <h2>Get in Touch</h2>
          <p className="section-desc">
            Have questions about Ceilao.Grid? We're here to help.
          </p>
          <div className="tech-line"></div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <FiMapPin className="info-icon" />
                <h3>Visit Us</h3>
              </div>
              <p>IIT Campus, Colombo, Sri Lanka</p>
              <div className="info-pattern"></div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FiMail className="info-icon" />
                <h3>Email Us</h3>
              </div>
              <p>ceilaogrid@gmail.com</p>
              <div className="info-pattern"></div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <FiGithub className="info-icon" />
                <h3>Follow Us</h3>
              </div>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FiGithub /> GitHub
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
              <div className="info-pattern"></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FiMessageSquare className="input-icon" />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <FiMessageSquare className="input-icon message-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.type === 'loading'}
            >
              <span>{status.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <FiSend className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
