const Discussion = () => {
    return (
        <div className="Discussion">
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="header">
                            <p className="recent">Most recent reviews</p>
                        </div>
                    <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="user.png" className="user" />
                        <blockquote>Review1</blockquote>
                        <h3>
                        Movie1 <span> username</span>
                        </h3>
                    </div>
                    </div>
                    <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="user.png" className="user" />
                        <blockquote>Review2</blockquote>
                        <h3>
                        Movie2 <span> username</span>
                        </h3>
                    </div>
                    </div>
                    <div className="col-md-4 text-center">
                    <div className="profile">
                        <img src="user.png" className="user" />
                        <blockquote>Review3</blockquote>
                        <h3>
                        Movie3 <span> username</span>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="forum">
                <ol>
                <li className="row1">
                    <a className="btn" href="/Thread.html">
                    <h5 className="title">Movie4</h5>
                    <div className="bottom">
                        <p className="timestamp">Date</p>
                        <p className="comment-count">Number of comments</p>
                    </div>
                    </a>
                </li>
                <li className="row1">
                    <a className="btn" href="/Thread.html">
                    <h5 className="title">Movie5</h5>
                    <div className="bottom">
                        <p className="timestamp">Date</p>
                        <p className="comment-count">Number of comments</p>
                    </div>
                    </a>
                </li>
                <li className="row1">
                    <a className="btn" href="/Thread.html">
                    <h5 className="title">Movie6</h5>
                    <div className="bottom">
                        <p className="timestamp">Date</p>
                        <p className="comment-count">Number of comments</p>
                    </div>
                    </a>
                </li>
                <li className="row1">
                    <a className="btn" href="/Thread.html">
                    <h5 className="title">Movie7</h5>
                    <div className="bottom">
                        <p className="timestamp">Date</p>
                        <p className="comment-count">Number of comments</p>
                    </div>
                    </a>
                </li>
                <li className="row1">
                    <a className="btn" href="/Thread.html">
                    <h5 className="title">Movie8</h5>
                    <div className="bottom">
                        <p className="timestamp">Date</p>
                        <p className="comment-count">Number of comments</p>
                    </div>
                    </a>
                </li>
                </ol>
            </div>
        </div>
    )
}

export default Discussion;