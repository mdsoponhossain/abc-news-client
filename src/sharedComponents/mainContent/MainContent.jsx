
const MainContent = ({ content,imgStyles, containerStyles, titleStyles, editorStyles, textContainerStlyes }) => {
    
    return (
        <div>
            {/* item one */}
            <div className={containerStyles}>
                <div className={imgStyles}>
                    <img src={content?.img} alt="" />
                </div>
                <div className={textContainerStlyes}>
                    <p className={titleStyles}>{content?.title}</p>
                    <div className={editorStyles}>
                        {content?.editorAndDate}
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};

export default MainContent;