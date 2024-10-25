import logo from "../assets/ლოგო-PNG-150x150.png";
import featuredLogo from "../assets/Check-Mark-Green-SVG-1.svg";


const VacancyCard = (props: { activeAccordionNumber: number | null, handleClick: (itemNumber: number) => void, itemNumber: number, content: string }) => {
    const { activeAccordionNumber, handleClick, itemNumber, content } = props;

    return (
        <>
            <div className="vacancy_card">
                <div className="vacancy_card_container-card">
                    <img className="vacancy_card-img" src={logo} alt="logo" />
                </div>
                <div className="vacancy_card-context">
                    <div className="vacancy_position">
                        <h2 className="vacancy_position-h2">დამფუძნებლის თანაშემწე</h2>
                        <img className="featured-logo" src={featuredLogo} alt="featured" />
                    </div>
                    <div className="vacancy_company">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="18px"
                            width="17px"
                        >
                            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                        </svg>
                        <h3 className="vacancy_company-h3">არქი – Archi</h3>
                    </div>
                    <div className="vacancy_request">
                        <div className="vacancy_request_container">
                            <svg
                                fill="grey"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                            >
                                <path d="M6.5 1A1.5 1.5 0 005 2.5V3H1.5A1.5 1.5 0 000 4.5v8A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0014.5 3H11v-.5A1.5 1.5 0 009.5 1h-3zm0 1h3a.5.5 0 01.5.5V3H6v-.5a.5.5 0 01.5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V7.15l6.614 1.764a1.5 1.5 0 00.772 0zM1.5 4h13a.5.5 0 01.5.5v1.616L8.129 7.948a.5.5 0 01-.258 0L1 6.116V4.5a.5.5 0 01.5-.5z" />
                            </svg>
                            <span className="vacancy_request-span">
                                სხვა
                            </span>
                        </div>
                        <div className="vacancy_request_container vac_req_cont-2">
                            <svg
                                viewBox="0 0 500 1000"
                                fill="grey"
                                height="1em"
                                width="1em"
                            >
                                <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                            </svg>
                            <span className="vacancy_request-span">
                                თბილისი
                            </span>
                        </div>
                    </div>
                    <div className="vacancy_condition">
                        <div className="vacancy_condition-left">
                            <span className="vacancy_condition-span-inf">სრული განაკვეთი</span>
                            <span className="vacancy_condition-span-time">უახლესი</span>
                        </div>
                        <div className="vacancy_condition-right">
                            <button
                                onClick={() => handleClick(itemNumber)}
                                className="vacancy_condition-btn">დეტალურად</button>
                        </div>
                    </div>
                    <div className="accordion_content
                    ">
                        {activeAccordionNumber === itemNumber ? <span className="accordion_content-span">{content}</span> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VacancyCard;
