import React, { Component } from 'react';
import './index.css';
import Sidebar from '../SideBar';
class FAQPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [
        {
          question: 'What is the purpose of this website?',
          answer: 'This website aims to raise funds to support children in need by providing education, healthcare, and other essential services.',
        },
        {
          question: 'How can I contribute?',
          answer: 'You can contribute by making a donation through our website. Every donation, no matter how small, makes a difference in the lives of children.',
        },
        {
          question: 'Is my donation tax-deductible?',
          answer: 'Yes, donations made through our website are tax-deductible to the extent allowed by law. You will receive a receipt for your donation for tax purposes.',
        },
        {
          question: 'Where does the money go?',
          answer: 'The funds raised are used to support various programs and initiatives aimed at improving the lives of children, including education, healthcare, nutrition, and shelter.',
        },
        {
          question: 'Can I sponsor a specific child?',
          answer: 'Yes, we offer sponsorship programs where you can support a specific child by providing them with education, healthcare, and other essential needs. Please contact us for more information on our sponsorship programs.',
        },
        // Add more FAQs as needed
      ],
      activeIndex: null,
    };
  }

  toggleFAQ = (index) => {
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
  };

  render() {
    const { faqs, activeIndex } = this.state;

    return (
      <div className="faq-page">
        <div className="sidebar">
         <Sidebar/>
        </div>
        <div className="faq-content">
          <h1>Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div className="faq" key={index}>
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => this.toggleFAQ(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQPage;
