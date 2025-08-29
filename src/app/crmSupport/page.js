import React from 'react';
import './style.css';
import Image from 'next/image';
import chart from "../../assets/images/crmChart.png";
import TryButton from '../components/button/tryButton';

const SupportedCrm = () => {
  return (
    <>
      <div className='ourSupportedCrm ptb-80'>
        <div className='mainCrmTxt'>
          <p className='crmTxt text-center'>Our Supported LeadCRM</p>
          <p className='crmTxtLower'>
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. 
            We don’t want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        <div className='chartSec'>
          <Image src={chart} alt='chartImg' className='img-fluid' />
        </div>

           <div className="lowerBtnTxt text-center">
        <TryButton text="Lets Integrate your CRM Now!"/>
      </div>
      </div>
    </>
  );
};

export default SupportedCrm;
