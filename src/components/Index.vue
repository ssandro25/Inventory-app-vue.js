<template>
    <div class="container-fluid main-container px-0">
        <div class="accordion d-flex flex-column" id="accordionPanelsStayOpenExample">
            <div class="accordion-item" id="maketi_s1">
                <h2 class="accordion-header" id="s1">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-s1" aria-expanded="false" aria-controls="panel-s1">
                        START
                    </button>
                </h2>
                <div id="panel-s1" class="accordion-collapse collapse show" aria-labelledby="s1">
                    <div class="accordion-body p-lg-3 p-0">
                        <MaketiStart/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi1">
                <h2 class="accordion-header" id="one">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-one" aria-expanded="false" aria-controls="panel-one">
                        1. ლიტერის მისამართი და მიწის ზოგადი მონაცემები
                    </button>
                </h2>

                <div id="panel-one" class="accordion-collapse collapse" aria-labelledby="one">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi1/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi2">
                <h2 class="accordion-header" id="two">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-two" aria-expanded="false" aria-controls="panel-two">
                        2. დაპროექტებული ღონისძიებები
                    </button>
                </h2>
                <div id="panel-two" class="accordion-collapse collapse" aria-labelledby="two">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi2/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi3">
                <h2 class="accordion-header" id="three">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-three" aria-expanded="false" aria-controls="panel-three">
                        3. ტყის ზოგადი მახასიათებლები
                    </button>
                </h2>
                <div id="panel-three" class="accordion-collapse collapse" aria-labelledby="three">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi3/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi4">
                <h2 class="accordion-header" id="four">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-four" aria-expanded="false" aria-controls="panel-four">
                        4. ჩახერგილობა,ზეხმელი
                    </button>
                </h2>
                <div id="panel-four" class="accordion-collapse collapse" aria-labelledby="four">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi4/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi10">
                <h2 class="accordion-header" id="five">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-five" aria-expanded="false" aria-controls="panel-five">
                        10. ტაქსაციური დახასიათება
                    </button>
                </h2>
                <div id="panel-five" class="accordion-collapse collapse" aria-labelledby="five">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi10/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi11">
                <h2 class="accordion-header" id="twelve">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twelve" aria-expanded="false" aria-controls="panel-twelve">
                        11. ტყის კულტურები
                    </button>
                </h2>
                <div id="panel-twelve" class="accordion-collapse collapse" aria-labelledby="twelve">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi11/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi12">
                <h2 class="accordion-header" id="thirteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirteen" aria-expanded="false" aria-controls="panel-thirteen">
                        12. დაზიანებული კორომი
                    </button>
                </h2>
                <div id="panel-thirteen" class="accordion-collapse collapse" aria-labelledby="thirteen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi12/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi13">
                <h2 class="accordion-header" id="fourteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-fourteen" aria-expanded="false" aria-controls="panel-fourteen">
                        13. ხაზობრივი განფენილობის მიწები
                    </button>
                </h2>
                <div id="panel-fourteen" class="accordion-collapse collapse" aria-labelledby="fourteen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi13/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi14">
                <h2 class="accordion-header" id="fiveteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-fiveteen" aria-expanded="false" aria-controls="panel-fiveteen">
                        14. ბალახეული მცენარეები და კენკროვნები
                    </button>
                </h2>
                <div id="panel-fiveteen" class="accordion-collapse collapse" aria-labelledby="fiveteen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi14/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi15">
                <h2 class="accordion-header" id="sixteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-sixteen" aria-expanded="false" aria-controls="panel-sixteen">
                        15. შესრულებული სამეურნეო ღონისძიებები
                    </button>
                </h2>
                <div id="panel-sixteen" class="accordion-collapse collapse" aria-labelledby="sixteen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi15/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi16">
                <h2 class="accordion-header" id="seventeen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-seventeen" aria-expanded="false" aria-controls="panel-seventeen">
                        16. არამერქნული ნედლეული
                    </button>
                </h2>
                <div id="panel-seventeen" class="accordion-collapse collapse" aria-labelledby="seventeen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi16/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi17">
                <h2 class="accordion-header" id="eighteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-eighteen" aria-expanded="false" aria-controls="panel-eighteen">
                        17. სასოფლო-სამეურნეო სავარგულები
                    </button>
                </h2>
                <div id="panel-eighteen" class="accordion-collapse collapse" aria-labelledby="eighteen">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi19">
                <h2 class="accordion-header" id="nineteen">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-nineteen" aria-expanded="false" aria-controls="panel-nineteen">
                        19. ჭაობების აღწერა
                    </button>
                </h2>
                <div id="panel-nineteen" class="accordion-collapse collapse" aria-labelledby="nineteen">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi19/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi21">
                <h2 class="accordion-header" id="twenty">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twenty" aria-expanded="false" aria-controls="panel-twenty">
                        21. რეკრეაციული დახასიათება
                    </button>
                </h2>
                <div id="panel-twenty" class="accordion-collapse collapse" aria-labelledby="twenty">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi21/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi22">
                <h2 class="accordion-header" id="twentyOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyOne" aria-expanded="false" aria-controls="panel-twentyOne">
                        22. ბაღების დახასიათება
                    </button>
                </h2>
                <div id="panel-twentyOne" class="accordion-collapse collapse" aria-labelledby="twentyOne">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi23">
                <h2 class="accordion-header" id="eleven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-eleven" aria-expanded="false" aria-controls="panel-eleven">
                        23. უბნის თავისებურება (დამატებით ინფორმაცია)
                    </button>
                </h2>
                <div id="panel-eleven" class="accordion-collapse collapse" aria-labelledby="eleven">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi23/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi24">
                <h2 class="accordion-header" id="twentyThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyThree" aria-expanded="false" aria-controls="panel-twentyThree">
                        24. ნიადაგის დახასიათება
                    </button>
                </h2>
                <div id="panel-twentyThree" class="accordion-collapse collapse" aria-labelledby="twentyThree">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi24/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi25">
                <h2 class="accordion-header" id="twentyFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyFour" aria-expanded="false" aria-controls="panel-twentyFour">
                        25. პლანტაცია
                    </button>
                </h2>
                <div id="panel-twentyFour" class="accordion-collapse collapse" aria-labelledby="twentyFour">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi25/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi26">
                <h2 class="accordion-header" id="twentyFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyFive" aria-expanded="false" aria-controls="panel-twentyFive">
                        26. სელექციური შეფასება
                    </button>
                </h2>
                <div id="panel-twentyFive" class="accordion-collapse collapse" aria-labelledby="twentyFive">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi26/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi27">
                <h2 class="accordion-header" id="maketi27">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-maketi27" aria-expanded="false" aria-controls="panel-maketi27">
                        27. წინა ტყეთმოწყობის მონაცემები
                    </button>
                </h2>
                <div id="panel-maketi27" class="accordion-collapse collapse" aria-labelledby="other">
                    <div class="accordion-body p-lg-3 p-0">
                        <Maketi27/>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi28">
                <h2 class="accordion-header" id="ten">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-ten" aria-expanded="false" aria-controls="panel-ten">
                        28. მისადგომობა სამეურნეო ზემოქმედებისთვის
                    </button>
                </h2>
                <div id="panel-ten" class="accordion-collapse collapse" aria-labelledby="ten">
                    <div class="accordion-body p-lg-3 p-0">
                        <div class="row m-0">
                            <div class="col-lg-6 col-6">
                                <label class="form-label text-truncate w-100" for="access_category">28.1. მისადგომლობის
                                    კატეგორია</label>

                                <select class="form-select" id="access_category">
                                    <option selected></option>
                                    <option value="1">1 - ზაფხ.მისად.</option>
                                    <option value="2">2 - ზამთ.მისად.</option>
                                    <option value="3">5 - ძნელადმისადგომი</option>
                                    <option value="4">9 - მიუდგომელი</option>
                                </select>
                            </div>

                            <div class="col-lg-3 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="transportis_saxeebi">28.2. ტრანსპორტის
                                    სახე</label>

                                <select class="form-select" id="transportis_saxeebi">
                                    <option selected></option>
                                    <option value="1">1 - საავტომობილო</option>
                                    <option value="2">2 - სატრაქტორო</option>
                                    <option value="3">3 - მოსათრევი მექანიზ.</option>
                                </select>
                            </div>
                            <label class="form-label text-truncate w-100" for="gzidan_dashoreba">
                                28.3. გზიდან დაშორება
                            </label>

                            <input type="number" class="form-control" step="0.1" min="1" max="999.9" id="rame_id">

                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi31">
                <h2 class="accordion-header" id="six">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-six" aria-expanded="false" aria-controls="panel-six">
                        31. მოზარდი
                    </button>
                </h2>
                <div id="panel-six" class="accordion-collapse collapse" aria-labelledby="six">
                    <div class="accordion-body p-lg-3 p-0">
                        <div class="row m-0">
                            <div class="col-lg-2 col-md-4 col-6">
                                <label class="form-label text-truncate w-100" for="quantity">31.1 რაოდენობა</label>

                                <input type="number" class="form-control" id="quantity"/>
                            </div>

                            <div class="col-lg-1 col-md-4 col-6">
                                <label class="form-label text-truncate w-100" for="mozardis_simagle">31.2 სიმაღლე(მ)</label>

                                <select class="form-select" id="mozardis_simagle">
                                    <option selected>სიმაღლე (მ)</option>
                                    <option value="1">0,5</option>
                                    <option value="2">1,0</option>
                                    <option value="3">1,5</option>
                                    <option value="3">2,0</option>
                                    <option value="3">2,5</option>
                                    <option value="3">3,0</option>
                                    <option value="3">3,1+</option>
                                </select>
                            </div>

                            <div class="col-lg-1 col-md-4 col-6 mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="age">31.3 ასაკი</label>

                                <select class="form-select" id="age">
                                    <option selected>ასაკი</option>
                                    <option value="1">5</option>
                                    <option value="2">10</option>
                                    <option value="3">15</option>
                                </select>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="coefficient_one">კოეფ. 1</label>

                                <input type="number" class="form-control" id="coefficient_one" disabled/>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_one">სახეობა 1</label>

                                <select class="form-select" id="type_one">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="coefficient_two">კოეფ. 2</label>

                                <input type="number" class="form-control" id="coefficient_two" disabled/>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_two">სახეობა 2</label>

                                <select class="form-select" id="type_two">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="coefficient_three">კოეფ. 3</label>

                                <input type="number" class="form-control" id="coefficient_three" disabled/>
                            </div>

                            <div class="col-lg-1 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_three">სახეობა 3</label>

                                <select class="form-select" id="type_three">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-2 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100">შეფასება</label>

                                <div class="form-check text-truncate">
                                    <input class="form-check-input" type="checkbox" value="" id="satisfactory">
                                    <label class="form-check-label text-truncate w-100"  for="satisfactory">
                                        დამაკმაყოფილებელი
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi32">
                <h2 class="accordion-header" id="seven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-seven" aria-expanded="false" aria-controls="panel-seven">
                        32. ქვეტყე
                    </button>
                </h2>
                <div id="panel-seven" class="accordion-collapse collapse" aria-labelledby="seven">
                    <div class="accordion-body p-lg-3 p-0">
                        <div class="row row-cols-lg-6 row-cols-md-3 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="distribution">განფენილობა</label>

                                <select class="form-select" id="distribution">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="daf_percent">დაფ. %</label>

                                <select class="form-select" id="daf_percent">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_one_two">სახეობა 1</label>

                                <select class="form-select" id="type_one_two">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_two_two">სახეობა 2</label>

                                <select class="form-select" id="type_two_two">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="type_three_two">სახეობა 3</label>

                                <select class="form-select" id="type_three_two">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="height_two">სიმაღლე</label>

                                <select class="form-select" id="height_two">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi33">
                <h2 class="accordion-header" id="thirtyThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtyThree" aria-expanded="false" aria-controls="panel-thirtyThree">
                        33. მცენარეთა სახეობების რაოდენობრივი მრავალფეროვნება
                    </button>
                </h2>
                <div id="panel-thirtyThree" class="accordion-collapse collapse" aria-labelledby="thirtyThree">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi34">
                <h2 class="accordion-header" id="thirty">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirty" aria-expanded="false" aria-controls="panel-thirty">
                        34. ლანდშაფტურ-ეკოლოგიური კარკასი
                    </button>
                </h2>
                <div id="panel-thirty" class="accordion-collapse collapse" aria-labelledby="thirty">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi35">
                <h2 class="accordion-header" id="twentySeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentySeven" aria-expanded="false" aria-controls="panel-twentySeven">
                        35. კოორდინატები
                    </button>
                </h2>
                <div id="panel-twentySeven" class="accordion-collapse collapse" aria-labelledby="twentySeven">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="rame_id">
                            35.1. გრძედი (X)
                        </label>

                        <input type="number" class="form-control" id="grdzedi">

                        <label class="form-label text-truncate w-100" for="grdzedi">
                            35.2. განედი (Y)
                        </label>

                        <input type="number" class="form-control" id="ganedi">

                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi36">
                <h2 class="accordion-header" id="twentyEight">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyEight" aria-expanded="false" aria-controls="panel-twentyEight">
                        36. სანახის ინდექსი (წყალი)
                    </button>
                </h2>
                <div id="panel-twentyEight" class="accordion-collapse collapse" aria-labelledby="twentyEight">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi37">
                <h2 class="accordion-header" id="thirtyOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtyOne" aria-expanded="false" aria-controls="panel-thirtyOne">
                        37. ანთროპოგენული ტრანსფორმაცია
                    </button>
                </h2>
                <div id="panel-thirtyOne" class="accordion-collapse collapse" aria-labelledby="thirtyOne">
                    <div class="accordion-body p-lg-3 p-0">
                        <div class="row row-cols-lg-2 row-cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="anthropogenic_transformation_type">37.1. ანტროპოგენული
                                    ტრანსფორმაციის ტიპი</label>

                                <select class="form-select" id="anthropogenic_transformation_type">
                                    <option selected></option>
                                    <option value="1">1 - კორომი გავლითი ჭრით</option>
                                    <option value="2">2 - წარმოებს ძოვება ან თიბვა</option>
                                    <option value="3">3 - გამოიყენება რეკრეაციული მიზნებით</option>
                                    <option value="4">4 - ხელუხლებელი ტყეები</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100"
                                       for="anthropogenic_transformation_quality">37.2. ანტროპოგენული ტრანსფორმაციის
                                    ხარისხი</label>

                                <select class="form-select" id="anthropogenic_transformation_quality">
                                    <option selected></option>
                                    <option value="1">1 - ძალიან ძლიერი</option>
                                    <option value="2">2 - ძლიერი</option>
                                    <option value="3">3 - საშუალო</option>
                                    <option value="4">4 - სუსტი</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi38">
                <h2 class="accordion-header" id="twentyNine">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-twentyNine" aria-expanded="false" aria-controls="panel-twentyNine">
                        38. ეკონომიკური შეფასება
                    </button>
                </h2>
                <div id="panel-twentyNine" class="accordion-collapse collapse" aria-labelledby="twentyNine">
                    <div class="accordion-body p-lg-3 p-0">
                        123
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi40">
                <h2 class="accordion-header" id="thirtyTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtyTwo" aria-expanded="false" aria-controls="panel-thirtyTwo">
                        40. პოტენციური კატასტროფული პროცესების შეფასება
                    </button>
                </h2>
                <div id="panel-thirtyTwo" class="accordion-collapse collapse" aria-labelledby="thirtyTwo">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="katastrofuli_procesebis_tipi">
                            40.1. ტიპი
                        </label>

                        <select class="form-select" id="katastrofuli_procesebis_tipi">
                            <option value="0"></option>
                            <option value="1">1 - მეწყერი</option>
                            <option value="2">2 - ღვარცოფი</option>
                            <option value="3">3 - ზვავი</option>
                            <option value="4">4 - ჩამონაშალი</option>
                        </select>

                        <label class="form-label text-truncate w-100" for="katastrofuli_procesebis_mdgradoba">
                            40.1. მდგრადობა
                        </label>

                        <select class="form-select" id="katastrofuli_procesebis_mdgradoba">
                            <option value="0"></option>
                            <option value="1">1 - ძლიერი</option>
                            <option value="2">2 - საშუალო</option>
                            <option value="3">3 - სუსტი</option>
                        </select>

                        <label class="form-label text-truncate w-100" for="xandzris_sashishroebis_klasi">
                            40.3. ხანძრის საშიშროების კლასი
                        </label>

                        <input type="text" class="form-control" id="xandzris_sashishroebis_klasi">
                        <label class="form-label text-truncate w-100" for="dazianebis_klasi">
                            40.4. დაზიანების კლასი
                        </label>

                        <input type="text" class="form-control" id="dazianebis_klasi">
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi42">
                <h2 class="accordion-header" id="thirtyFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtyFour" aria-expanded="false" aria-controls="panel-thirtyFour">
                        42. ცხოველთა სამყარო (ივსება სფ ბარათიდან)
                    </button>
                </h2>
                <div id="panel-thirtyFour" class="accordion-collapse collapse" aria-labelledby="thirtyFour">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="budeebi">
                            42.1. ბუდეები
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="budeebi">

                        <label class="form-label text-truncate w-100" for="gadaberebuli_xeebi_fughuroti">
                            42.2. გადაბერებული ხეები ფუღუროთი
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="gadaberebuli_xeebi_fughuroti">

                        <label class="form-label text-truncate w-100" for="wianwvelebis_budeebi">
                            42.3. ჭიანჭველების ბუდეები
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="wianwvelebis_budeebi">

                        <label class="form-label text-truncate w-100" for="adgilsamkofeli">
                            42.4. ადგილსამყოფელი
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="adgilsamkofeli">
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi43">
                <h2 class="accordion-header" id="thirtyFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtyFive" aria-expanded="false" aria-controls="panel-thirtyFive">
                        43. ფიტომასა და ვარჯის შეკრულობა % (ივსება სფ ბლანკიდან)
                    </button>
                </h2>
                <div id="panel-thirtyFive" class="accordion-collapse collapse" aria-labelledby="thirtyFive">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="varjis_shekruloba_proc">
                            43.1. ვარჯის შეკრულობა % 1-99
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="99" id="varjis_shekruloba_proc">
                        <label class="form-label text-truncate w-100" for="fitomasa_moculoba">
                            43.2. ფიტომასა 1ჰა, მ3 1-9999
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="9999" id="fitomasa_moculoba">
                        <label class="form-label text-truncate w-100" for="fitomasa_masa">
                            43.3. ფიტომასა 1ჰა, ტონებში 1-9999
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="9999" id="fitomasa_masa">
                        <label class="form-label text-truncate w-100" for="mkvdari_masa_moculoba">
                            43.4. მკვდარი მასა 1ჰა, მ3 1-9999
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="9999" id="mkvdari_masa_moculoba">
                        <label class="form-label text-truncate w-100" for="mkvdari_masa_masa">
                            43.5. მკვდარი მასა 1ჰა, ტონებში 1-9999
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="9999" id="mkvdari_masa_masa">
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi44">
                <h2 class="accordion-header" id="maketi44">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-maketi44" aria-expanded="false" aria-controls="panel-maketi44">
                        44. ბუნებრივი განვითარების ბოლო სტადია
                    </button>
                </h2>
                <div id="panel-maketi44" class="accordion-collapse collapse" aria-labelledby="maketi44">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="m44_gabatonebuli_saxeoba">44.1 გაბატონებული
                            სახეობა</label>

                        <select class="form-select" id="m44_gabatonebuli_saxeoba">
                            <option value="0"></option>
                            <option value="1">1 - ნაძვი</option>
                            <option value="2">2 - სოჭი</option>
                            <option value="3">3 - ფიჭვი</option>
                            <option value="4">4 - წიფელი</option>
                            <option value="5">5 - წიფელი (ა)</option>
                            <option value="6">6 - რცხილა</option>
                            <option value="7">7 - რცხილა (ა)</option>
                            <option value="8">8 - მუხა</option>
                            <option value="9">9 - მუხა (ა)</option>
                            <option value="10">10 - იფანი</option>
                            <option value="11">11 - ნეკერჩხალი</option>
                            <option value="12">12 - ნეკერჩხალი (ა)</option>
                            <option value="13">13 - წაბლი</option>
                            <option value="14">14 - წაბლი (ა)</option>
                            <option value="15">15 - აკაცია</option>
                            <option value="16">16 - აკაცია (ა)</option>
                            <option value="17">17 - ჯაგრცხილა</option>
                            <option value="18">18 - ვერხვი</option>
                            <option value="19">19 - თელა</option>
                            <option value="20">20 - თხმელა</option>
                            <option value="21">21 - თხმელა (ა)</option>
                            <option value="22">22 - ცაცხვი</option>
                            <option value="23">23 - კაკალის ხე</option>
                            <option value="24">24 - პანტა</option>
                            <option value="25">25 - მაჟალო</option>
                            <option value="26">26 - კრიპტომერია</option>
                            <option value="27">27 - ევკალიპტი</option>
                            <option value="28">28 - ტიტას ხე</option>
                            <option value="29">29 - აილანთუსი</option>
                            <option value="30">30 - არყი</option>
                            <option value="31">31 - ტირიფი</option>
                            <option value="32">32 - თხილი</option>
                            <option value="33">33 - წყავი</option>
                            <option value="34">34 - შქერი, ჭყორი</option>
                            <option value="35">35 - ბამბუკი</option>

                        </select>

                        <label class="form-label text-truncate w-100" for="m44_sixshire">44.2 სიხშირე</label>

                        <select class="form-select" id="m44_sixshire">
                            <option value="0"></option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="1">04</option>
                            <option value="2">05</option>
                            <option value="3">06</option>
                            <option value="1">07</option>
                            <option value="2">08</option>
                            <option value="3">09</option>
                            <option value="3">1</option>
                        </select>

                        <label class="form-label text-truncate w-100" for="m44_maragi">
                            44.3. მარაგი ათეული მ3 1-150
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="150" id="m44_maragi">

                        <label class="form-label text-truncate w-100" for="m44_boniteti">44.4 ბონიტეტი</label>

                        <select class="form-select" id="m44_boniteti">
                            <option value="0"></option>
                            <option value="1">I</option>
                            <option value="2">Iა</option>
                            <option value="3">II</option>
                            <option value="4">III</option>
                            <option value="5">IV</option>
                            <option value="6">V</option>
                            <option value="7">Vა</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi45">
                <h2 class="accordion-header" id="thirtySeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-thirtySeven" aria-expanded="false" aria-controls="panel-thirtySeven">
                        45. შემადგენლობა ხეთა რაოდენობით (ივსება სფ ბლანკიდან)
                    </button>
                </h2>
                <div id="panel-thirtySeven" class="accordion-collapse collapse" aria-labelledby="thirtySeven">
                    <div class="accordion-body p-lg-3 p-0">
                        <label class="form-label text-truncate w-100" for="m45_koeficienti_1">
                            45.1. კოეფიციენტი #1
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="m45_koeficienti_1">

                        <label class="form-label text-truncate w-100" for="m45_saxeoba_1">
                            45.2. სახეობა #1
                        </label>

                        <select class="form-select" id="m45_saxeoba_1">
                            <option value="0"></option>
                            <option value="1">წფ</option>
                            <option value="2">რც</option>
                            <option value="3">მხ</option>
                        </select>
                        <label class="form-label text-truncate w-100" for="m45_koeficienti_2">
                            45.3. კოეფიციენტი #2
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="m45_koeficienti_2">

                        <label class="form-label text-truncate w-100" for="m45_saxeoba_2">
                            45.4. სახეობა #2
                        </label>

                        <select class="form-select" id="m45_saxeoba_2">
                            <option value="0"></option>
                            <option value="1">წფ</option>
                            <option value="2">რც</option>
                            <option value="3">მხ</option>
                        </select>
                        <label class="form-label text-truncate w-100" for="m45_koeficienti_3">
                            45.5. კოეფიციენტი #3
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="m45_koeficienti_3">

                        <label class="form-label text-truncate w-100" for="m45_saxeoba_3">
                            45.6. სახეობა #3
                        </label>

                        <select class="form-select" id="m45_saxeoba_3">
                            <option value="0"></option>
                            <option value="1">წფ</option>
                            <option value="2">რც</option>
                            <option value="3">მხ</option>
                        </select>
                        <label class="form-label text-truncate w-100" for="m45_koeficienti_4">
                            45.7. კოეფიციენტი #4
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="10" id="m45_koeficienti_4">

                        <label class="form-label text-truncate w-100" for="m45_saxeoba_4">
                            45.8. სახეობა #4
                        </label>

                        <select class="form-select" id="m45_saxeoba_4">
                            <option value="0"></option>
                            <option value="1">წფ</option>
                            <option value="2">რც</option>
                            <option value="3">მხ</option>
                        </select>

                    </div>
                </div>
            </div>

            <div class="accordion-item" id="maketi1488">
                <h2 class="accordion-header" id="1488">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panel-1488" aria-expanded="false" aria-controls="panel-1488">
                        ტესტური
                    </button>
                </h2>
                <div id="panel-1488" class="accordion-collapse collapse" aria-labelledby="1488">
                    <div class="accordion-body p-lg-3 p-0">
                        <!--   SELECT !!!  -->
                        <label class="form-label text-truncate w-100" for="rame_id">
                            select label name
                        </label>

                        <select class="form-select" id="rame_id">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        <!--   INPUT(NUMBER) რეინჯი 1დან-5მდე !!!  -->
                        <label class="form-label text-truncate w-100" for="rame_id">
                            input number label name
                        </label>

                        <input type="number" class="form-control" step="1" min="1" max="5" id="rame_id">

                        <!--   INPUT(NUMBER) რეინჯის გარეშე !!!  -->
                        <label class="form-label text-truncate w-100" for="rame_id">
                            input number label name
                        </label>

                        <input type="number" class="form-control" id="rame_id">


                        <!--   INPUT(TEXT) !!!  -->
                        <label class="form-label text-truncate w-100" for="rame_id">
                            input text label name
                        </label>

                        <input type="text" class="form-control" id="rame_id">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Maketi1 from "@/components/makets/Maketi-1.vue";
import Maketi2 from "@/components/makets/Maketi-2.vue";
import Maketi3 from "@/components/makets/Maketi-3.vue";
import Maketi4 from "@/components/makets/Maketi-4.vue";
import Maketi10 from "@/components/makets/Maketi-10.vue";
import Maketi11 from "@/components/makets/Maketi-11.vue";
import Maketi12 from "@/components/makets/Maketi-12.vue";
import Maketi13 from "@/components/makets/Maketi-13.vue";
import Maketi14 from "@/components/makets/Maketi-14.vue";
import Maketi15 from "@/components/makets/Maketi-15.vue";
import Maketi16 from "@/components/makets/Maketi-16.vue";
import Maketi19 from "@/components/makets/Maketi-19.vue";
import Maketi21 from "@/components/makets/Maketi-21.vue";
import Maketi23 from "@/components/makets/Maketi-23.vue";
import Maketi24 from "@/components/makets/Maketi-24.vue";
import Maketi25 from "@/components/makets/Maketi-25.vue";
import Maketi26 from "@/components/makets/Maketi-26.vue";
import Maketi27 from "@/components/makets/Maketi-27.vue";
import MaketiStart from "@/components/makets/Maketi-start.vue";

export default {
    name: 'IndexInvAPP',

    components: {
        MaketiStart,
        Maketi27,
        Maketi26,
        Maketi25,
        Maketi24,
        Maketi23,
        Maketi21,
        Maketi19,
        Maketi16,
        Maketi15,
        Maketi14,
        Maketi13,
        Maketi12,
        Maketi11,
        Maketi10,
        Maketi4,
        Maketi3,
        Maketi2,
        Maketi1
    }
}
</script>

<style scoped>
.accordion-button  {
    background-color: #033D24;
    color: #fff;
}
.accordion-button:not(.collapsed) {
    background-color: #033D24 !important;
    color: #fff !important;
}
.accordion-button::after {
    background-image: unset !important;
    font-family: "Font Awesome 5 Free";
    content: "\2b";
    font-weight: 900;
}

.accordion-button:not(.collapsed)::after {
    background-image: unset !important;
    font-family: "Font Awesome 5 Free";
    content: "\f068";
    font-weight: 900;
    transform: unset;
}
</style>