import "./Faq.css";
import { useState } from "react";

function Faq(){
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="wrapper" id="faqLink">
            <div className="accordion">
                <h1>FAQs</h1>
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}>
                            <h4 className="qa_title">{item.question}</h4>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={selected === i ? 'faq-content show' : 'faq-content'}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        question: 'Is a CT scan safe for everyone?',
        answer: 'While CT scans are generally considered safe, there are some precautions that need to be taken for certain individuals. Pregnant women and individuals with kidney problems should consult with their doctor before undergoing a CT scan.'
    },
    {
        question: 'How long does the system take?',
        answer: 'The time it takes to receive the report from the CT scan tool may vary based on the volume of submissions. However, our goal is to provide the report as quickly as possible while maintaining the highest level of accuracy.'
    },
    {
        question: 'What file formats are accepted for CT?',
        answer: 'Our tool accepts JPEG, JPG, and PNG file formats for the CT scan results. However, it is inevitable to mention that do not upload an invalid file which may cause the system to predict an invalid result.'
    },
    {
        question: 'Is a prescription from a doctor required for the CT scan?',
        answer: 'Yes, your doctor must give you a referral (prescription) in order for you to receive a computed tomography (CT) imaging examination. However, symptoms analysis does not require any pre-requisites to undergo the analysis. Please make sure the file is in the acceptable format.'
    },
    {
        question: 'Can the system detect all types of nephrological diseases?',
        answer: 'The CT scan tool is designed to detect a variety of nephrological diseases, including Polycystic Kidney Disease (PKD), Renal Adenoma, and Nephrolithiasis. However, the accuracy of the tool may be limited in detecting some rare or complex nephrological diseases.'
    },
    {
        question: 'Do you suggest any treatment options to undergo?',
        answer: 'No. If the CT scan tool and symptoms analysis tool detects a potential nephrological disease, the patient will be informed through the generated report. The patient should then follow up with their doctor to discuss further steps and potential treatment options.'
    }
]

export default Faq