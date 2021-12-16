import "../resources/css/openingtimes.css";

const OpeningTimes = () => {

    return (
        <div>
            <div class="px-4">
                <div class="text-center text-white container-fluid" id="opening-hero">
                    <h1 class="display-4 fw-bold pt-5">Opening Times</h1>
                    <p class="lead mt-4">Find out our opening days and times below!</p>
                </div>
            </div>

            <div class="container-fluid px-5 my-3" id="contactUsBody">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-sm-6 p-4">
                                        <div class="card">
                                            <div class="card-header">
                                                Opening Hours & Days
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item text-center py-4">Monday : 10:00 - 22:00</li>
                                                <li class="list-group-item text-center py-4">Tuesday : 09:00 - 22:00</li>
                                                <li class="list-group-item text-center py-4">Wednesday : 09:00 - 22:00</li>
                                                <li class="list-group-item text-center py-4">Thursday : 09:00 - 23:00</li>
                                                <li class="list-group-item text-center py-4">Friday : 09:00 - 22:00</li>
                                                <li class="list-group-item text-center py-4">Saturday : 10:00 - 23:00</li>
                                                <li class="list-group-item text-center py-4">Sunday : 11:00 - 20:00</li>
                                                <br />
                                                <li class="list-group-item text-center py-4">
                                                    <h5>Closed on Seasonal Holidays
                                                        <br />and Bank Holidays
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 d-sm-block" id="openingImage">
                                        <div class="container h-100">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OpeningTimes;
