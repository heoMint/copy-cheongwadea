import './style.css';

const Header = () => {
    return (
        <header className="bg-blue">
            <div className="header-wrapper">
                <div className="">
                    {/* <h1>
                    <a href="/">
                        <img
                            src="https://www.president.go.kr/assets/images/common/logo.svg"
                            alt="대한민국 대통령실"
                        ></img>
                    </a>
                </h1> */}
                    <nav className="absolute top-0 right-0">
                        <a
                            href="https://eng.president.go.kr/"
                            className="btn_language"
                            title="대통령실 영문 홈페이지 바로가기"
                        >
                            <span>ENG</span>
                        </a>
                        <a href="#none" className="btn_size" title="글자크기">
                            <span>글자크기</span>
                        </a>
                    </nav>
                </div>
                <div className="ul_parent">
                    <h1>
                        <a href="/">
                            <img
                                src="https://www.president.go.kr/assets/images/common/logo.svg"
                                alt="대한민국 대통령실"
                            ></img>
                        </a>
                    </h1>
                    <ul className="ul_wrapper">
                        <li className="li_child">
                            <a
                                href="https://www.president.go.kr/president/greeting"
                                title="클릭 시 대한민국 대통령 메뉴로 이동합니다."
                            >
                                대한민국 대통령
                            </a>
                        </li>
                        <li className="li_child">
                            <a
                                href="https://www.president.go.kr/yongsan_office/open_office"
                                title="클릭 시 대통령실 메뉴로 이동합니다."
                            >
                                대통령실
                            </a>
                        </li>
                        <li className="li_child">
                            <a
                                href="https://www.president.go.kr/affairs/vision"
                                title="클릭 시 국정과제 메뉴로 이동합니다."
                            >
                                국정과제
                            </a>
                        </li>
                        <li className="li_child">
                            <a
                                href="https://www.president.go.kr/newsroom"
                                title="클릭 시 대통령실 뉴스룸 메뉴로 이동합니다."
                            >
                                대통령실 뉴스룸
                            </a>
                        </li>
                        <li className="li_child">
                            <a
                                href="https://www.president.go.kr/open/process"
                                title="클릭 시 정보공개 메뉴로 이동합니다."
                            >
                                정보공개
                            </a>
                        </li>
                        <li className="li_child">
                            <a href="https://withpeople.president.go.kr/" title="새창열림">
                                국민제안
                            </a>
                        </li>
                    </ul>
                    <div className="flex">
                        <button
                            type="button"
                            className="btn_topSearch"
                            // onClick="location.href='/search'"
                        >
                            <img
                                src="https://www.president.go.kr/assets/images/common/ico_topSearch.svg"
                                alt="통합검색"
                            />
                            <span className="hidden">통합검색</span>
                        </button>
                        <button type="button" className="btn_sitemap">
                            <img
                                src="https://www.president.go.kr/assets/images/common/ico_siteMap.svg"
                                alt="사이트맵"
                            />
                            <span className="hidden">사이트맵</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
