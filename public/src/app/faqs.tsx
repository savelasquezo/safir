import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQS: React.FC = () => {
  const [faqs, setFaqs] = useState<{ id: number; question: string; answer: string }[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/app/v1/manager/fetch-faqs/`);
        const activeFaqs = response.data.results.filter((faq: any) => faq.is_active);
        setFaqs(activeFaqs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 w-full mx-auto mt-8 md:mt-16">
          {faqs.map((faq) => (
            <Accordion key={faq.id} className="w-full">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${faq.id}-content`}
                id={`panel${faq.id}-header`}
                className='text-xl font-semibold'
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          ¿Todavía tienes preguntas?{' '}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
            Contacta con nuestro soporte
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQS;
