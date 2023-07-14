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
                <div id="panel-s1" class="accordion-collapse collapse" aria-labelledby="s1">
                    <div class="accordion-body p-lg-3 p-0">

                        <div class="row mt-3 m-0">
                            <div class="col-12">
                                <label class="form-label text-truncate w-100" for="baratis_uid">
                                    ბარათის UID (დაგენერირდება ავტომატურად)
                                </label>

                                <input type="text" class="form-control" id="baratis_uid">
                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row row-cols-lg-2 row-cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="martvis_organo">
                                    მართვის ორგანო
                                </label>

                                <select class="form-select" id="martvis_organo">
                                    <option value="0">აირჩიე</option>
                                    <option value="1">სსიპ ეროვნული სატყეო სააგენტო</option>
                                    <option value="2">სსიპ დაცული ტერიტორიების სააგენტო</option>
                                    <option value="3">სსიპ აჭარის სატყეო სააგენტო</option>
                                    <option value="4">გარდაბნის მუნიციპალიტეტი</option>
                                    <option value="5">თელავის მუნიციპალიტეტი</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100">
                                    ადმინისტრაცია
                                </label>

                                <select class="form-select" id="erovnuli_satkeo_saagento" style="display: none;">
                                    <option value="1">მცხეთა-მთიანეთს სატყეო სამსახური</option>
                                    <option value="2">კახეთის სატყეო სამსახური</option>
                                    <option value="3">ETC</option>
                                </select>

                                <select class="form-select" id="daculi_teritoriebis_saagento" style="display: none;">
                                    <option value="1">თბილისის ეროვნული პარკი</option>
                                    <option value="2">ბორჯომ-ხარაგაულის ეროვნული ეროვნული პარკი</option>
                                    <option value="3">ETC</option>
                                </select>

                                <select class="form-select" id="acharis_satkeo_saagento" style="display: none;">
                                    <option value="1">ქობულეთს სატყეო ადმინისტრაცია</option>
                                    <option value="2">ხელვაჩაურის სატყეო ადმინისტრაცია</option>
                                    <option value="3">ქედის სატყეო ადმინისტრაცია</option>
                                    <option value="4">შუახევის სატყეო ადმინისტრაცია</option>
                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="satkeo_ubani">
                                    სატყეო უბანი
                                </label>

                                <input type="text" class="form-control" value="მცხეთა-მთიანეთის სატყეო სამსახური" id="satkeo_ubani">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="satkeo">
                                    სატყეო
                                </label>

                                <select class="form-select" id="satkeo">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="kvartali">
                                    კვარტალი
                                </label>

                                <input type="number" class="form-control" id="kvartali">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="sataksacio_ubani_gis">
                                    სატაქსაციო უბანი (GIS)
                                </label>

                                <input type="number" class="form-control" id="sataksacio_ubani_gis">
                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row row-cols-lg-2 row-cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="agricxvis_metodi">
                                    აღრიცხვის მეთოდი
                                </label>

                                <select class="form-select" id="agricxvis_metodi">
                                    <option value="1">1- პროგრამულად</option>
                                    <option value="2">2- ფურცელზე (მატარიალურად)</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="taksaciis_metodi">
                                    ტაქსაციის მეთოდი
                                </label>

                                <select class="form-select" id="taksaciis_metodi">
                                    <option value="1">1- თვალზომური</option>
                                    <option value="2">2- დეტალური (წსფ)</option>
                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="fartobi_gis">
                                    ფართობი (GIS)
                                </label>

                                <input type="number" class="form-control" id="fartobi_gis">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="wsf_raodenoba">
                                    წსფ რაოდენობა
                                </label>

                                <input type="number" class="form-control" id="wsf_raodenoba">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="wsf_fartobi">
                                    წსფ ფართობი
                                </label>

                                <input type="number" class="form-control" id="wsf_fartobi">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="wsf_tipi">
                                    წსფ ტიპი
                                </label>

                                <input type="number" class="form-control" id="wsf_tipi">
                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row row-cols-lg-3 row-cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="shevasebis_tarigi_dro">
                                    შევსების თარიღი და დრო
                                </label>

                                <input type="datetime-local" class="form-control" id="shevasebis_tarigi_dro">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="taksatori">
                                    ტაქსატორი
                                </label>

                                <input type="text" class="form-control" id="taksatori">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="damxmare">
                                    დამხმარე
                                </label>

                                <input type="text" class="form-control" id="damxmare">
                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row m-0">
                            <div class="col-lg-3 col-12">
                                <label class="form-label text-truncate w-100" for="rukis_shesabamisoba">
                                    რუკის შესაბამისობა დაქტობრივებთან
                                </label>

                                <select class="form-select" id="rukis_shesabamisoba">
                                    <option value="yes">კი</option>
                                    <option value="no">არა</option>
                                </select>
                            </div>

                            <div class="col-lg-3 col-12 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="cvlilebis_saxe">
                                    ცვლილების სახე
                                </label>

                                <select class="form-select" id="cvlilebis_saxe">
                                    <option value="1">1- გაყოფა</option>
                                    <option value="2">2- გაერთიანება</option>
                                </select>
                            </div>

                            <div class="col-lg-3 col-12 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="cvlilebis_mizezi">
                                    ცვლილების მიზეზი
                                </label>

                                <select class="form-select" id="cvlilebis_mizezi">
                                    <option value="1">1- გაერთანებულია ექსპოზიციები</option>
                                    <option value="2">2- დაქანებები</option>
                                    <option value="3">2- სახეობები</option>
                                </select>
                            </div>

                            <div class="col-lg-3 col-12 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="sataksacio_ubnis_axali">
                                    სატაქსაციო უბნის ახალი #
                                </label>

                                <input type="text" class="form-control" id="sataksacio_ubnis_axali">
                            </div>

                            <div class="col-12 mt-3">
                                <label class="text-truncate w-100" for="komentari_start">კომენტარი</label>
                                <textarea class="form-control" rows="3" id="komentari_start"></textarea>
                            </div>
                        </div>

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
                        <Maketi1/>
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
                        <div class="row m-0">
                            <div class="col-lg-3 col-6">
                                <label class="form-label text-truncate w-100" for="grove_damage_types">
                                    კორომის დაზიანების ტიპები
                                </label>

                                <select class="form-select" id="grove_damage_types">
                                    <option selected></option>
                                    <option value="1">1 - დაბლითი ხანძარი </option>
                                    <option value="2">2 - მაღლივი ხანძარი</option>
                                    <option value="3">3 - ქარქცევული</option>
                                    <option value="4">4 -  თოვლტეხილი</option>
                                    <option value="5">5 - დაჭაობება</option>
                                    <option value="6">6 - გვალვა</option>
                                    <option value="7">7 - ფესვის ყელის მოწვა</option>
                                    <option value="8">8 - მოყინვა</option>
                                    <option value="9">9 - ტყის დაავადებები</option>
                                    <option value="10">10 - ენტომავნებლები</option>
                                    <option value="11">11 - გარეული ცხოველები</option>
                                    <option value="12">12 - შინაური ცხოველები</option>
                                    <option value="13">13 - მექანიკური დაზიანება</option>
                                    <option value="14">14 - საწარმო გამონაბოლქვი</option>
                                    <option value="15">15 - აგროტექნიკის დარღვევა</option>
                                    <option value="16">16 - ბზის სიდამწვრე </option>
                                    <option value="17">17 - რეზერვი</option>
                                    <option value="18">18 - რეზერვი</option>
                                    <option value="19">19 - ეკოლოგიური დარღვევები</option>

                                </select>
                            </div>

                            <div class="col-lg-3 col-6">
                                <label class="form-label text-truncate w-100" for="injury_year">
                                    დაზიანების წელი
                                </label>

                                <input type="number" class="form-control" id="injury_year">
                            </div>

                            <div class="col-lg-3 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="damaged_woody_type">
                                    დაზიანებული მერქნიანი სახეობა
                                </label>

                                <select class="form-select" id="damaged_woody_type">
                                    <option selected></option>
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
                            </div>

                            <div class="col-lg-3 col-6 mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="pest_disease_type">
                                    მავნებლისა და დაავადების სახეობა
                                </label>

                                <select class="form-select" id="pest_disease_type">
                                    <option selected></option>
                                    <option value="1">1 - ფიჭვის მზომელა</option>
                                    <option value="2">2 - ფიჭვის პარკხვევია</option>
                                    <option value="3">3 - ფიჭვის ჩვეულებრივი ხერხია</option>
                                    <option value="4">4 - ფიჭვის ქარცი ხერხია</option>
                                    <option value="5">5 - ნაძვის დიდი ლაფანჭამია</option>
                                    <option value="6">6 - ექვსკბილა ქერქიჭამია</option>
                                    <option value="7">7 - ქერქიჭამია ტიპოგრაფი</option>
                                    <option value="8">8 - ფიჭვის დიდი ლაფნიჭამია (მებაღე)</option>
                                    <option value="9">9 - ფიჭვის პატარა ლაფნიჭამია (პატარა მებაღე)</option>
                                    <option value="10">10 - კენწეროს ქერქიჭამია</option>
                                    <option value="11">11 - ორკბილა ქერქიჭამია</option>
                                    <option value="12">12 - ოთხკბილა ქერქიჭამია</option>
                                    <option value="13">13 - ნაძვის კრიფალი</option>
                                    <option value="14">14 - აღმოსავლეთის კაუჭ-კბილა ქერქიჭამია</option>
                                    <option value="15">15 - ზოლიანი მემერქნია</option>
                                    <option value="16">16 - ნაძვის დიდი შავი ხარაბუზა</option>
                                    <option value="17">17 - ნაძვის მკერდმქრალა ხარაბუზა</option>
                                    <option value="18">18 - ნაძვის პატარა შავი ხარაბუზა</option>
                                    <option value="19">19 - ფიჭვის შავი ხარაბუზა</option>
                                    <option value="20">20 - ლურჯი პეწიანა</option>
                                    <option value="21">23 - ფიჭვის ლურჯი ბოლორქიანა</option>
                                    <option value="22">24 - კავკასიის დიდი ბოლორქიანა</option>
                                    <option value="23">26 - წიწვების სიყვითლე და ხმობა (შუტე)</option>
                                    <option value="24">27 - თოვლის სოკო (ფაციდიოზი)</option>
                                    <option value="25">28 - ფიჭვის ჯანგა (მელამფსორა)</option>
                                    <option value="26">29 - ნაძვის ტოტების ხმობა</option>
                                    <option value="27">30 - ცქვლეფია მზომელა</option>
                                    <option value="28">31 - ზამთრის მზომელა</option>
                                    <option value="29">32 - ოქროკუდა</option>
                                    <option value="30">33 - არაფარდი პარკხვევია</option>
                                    <option value="31">34 - რგოლური პარკხვევია</option>
                                    <option value="32">35 - კუნელის თეთრულა</option>
                                    <option value="33">36 - ტირიფის ტალღურა</option>
                                    <option value="34">37 - მუხის ფოთოლმხვევია</option>
                                    <option value="35">38 - თელის ფოთლიჭამია</option>
                                    <option value="36">39 - მუხის ფოთლის რწყილი</option>
                                    <option value="37">40 - მურყნის ფოთოლჭამია</option>
                                    <option value="38">41 - მუხის ცხვირგრძელა</option>
                                    <option value="39">42 - მუხის ერთფეროვანი ჩრჩილი</option>
                                    <option value="40">43 - ბუგრები</option>
                                    <option value="41">44 - ცილაჭამიები</option>
                                    <option value="42">45 - ლაფნჭამიები</option>
                                    <option value="43">48 - ხერხიები</option>
                                    <option value="44">49 - ხარაბუზები</option>
                                    <option value="45">50 - პეწიანები</option>
                                    <option value="46">51 - მინაფრთიანები</option>
                                    <option value="47">52 - პაუტიანობა</option>
                                    <option value="48">53 - თელის ჰოლანდიური დაავადება (გრაფიოზი)</option>
                                    <option value="49">46 - წაბლის კიბო (ენდოტეოზი)</option>
                                    <option value="50">47 - მუხის ტრახეომიკოზული დაავადება</option>
                                    <option value="51">54 - ფოთლების შავი სილაქავე</option>
                                    <option value="52">55 - კაკლის მურა სილაქავე (მარსონიოზი)</option>
                                    <option value="53">56 - აბედა სოკოები</option>
                                    <option value="54">57 - მუხის ნაცარი</option>
                                    <option value="55">58 - ფოთლების ჭკნობა გამოწვეული ბაქტერიული დაავადებებით</option>
                                    <option value="56">59 - ნეკერჩხლის მუხისებური დაავადება</option>
                                    <option value="57">60 - მუხის სიდამწვრე</option>

                                </select>
                            </div>

                            <div class="col-lg-4 col-6 mt-3">
                                <label class="form-label text-truncate w-100" for="damage_degree">
                                    დაზიანების ხარისხი
                                </label>

                                <select class="form-select" id="damage_degree">
                                    <option selected></option>
                                    <option value="1">1 - სუსტი (დაზ.10%)</option>
                                    <option value="2">2 - საშუალო (დაზ.11-30%)</option>
                                    <option value="3">3 - ძლიერი (31% და მეტი)</option>

                                </select>
                            </div>

                            <div class="col-lg-4 col-6 mt-3">
                                <label class="form-label text-truncate w-100" for="pest_disease_type_two">
                                    მავნებლისა და დაავადების სახეობა
                                </label>

                                <select class="form-select" id="pest_disease_type_two">
                                    <option selected>1 - ფიჭვის მზომელა</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col-lg-4 col-6 mt-3">
                                <label class="form-label text-truncate w-100" for="damage_degree_two">
                                    დაზიანების ხარისხი
                                </label>

                                <select class="form-select" id="damage_degree_two">
                                    <option selected>1 - სუსტი (დაზ.10%)</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
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
                        <div class="row row-cols-lg-4 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="track_width">
                                    ტრასის სიგანე 0,1 მ სიზუსტით
                                </label>

                                <input type="number" class="form-control" id="track_width">
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="track_length">
                                    ტრასის სიგრძე
                                </label>

                                <input type="number" class="form-control" id="track_length">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="condition">
                                    მდგომარეობა(შეივსოს აუცილებლად)
                                </label>

                                <select class="form-select" id="condition">
                                    <option selected></option>
                                    <option value="1">61 - სუფთა</option>
                                    <option value="2">62 - სუფთა მინერალიზირებული</option>
                                    <option value="3">3 - 63 - დაფარულია მერქნიანი სახეობებით</option>
                                    <option value="4">64 - დაფ.მინერ.</option>
                                    <option value="5">65 - ჩაგერხილი</option>
                                    <option value="6">66 - გავლა შეს.</option>
                                    <option value="7">67 - გაუვალი</option>
                                    <option value="8">68 - დამაკ.გზი.</option>
                                    <option value="9">69 - არადამაკ.გზისთვის</option>

                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="road_destination">
                                    გზის დანიშნულება
                                </label>

                                <select class="form-select" id="road_destination">
                                    <option selected></option>
                                    <option value="1">1 - სატყეო-სამ.</option>
                                    <option value="2">2 - ტყესაზიდი</option>
                                    <option value="3">3 - ხანძარსაწინააღმდეგო</option>
                                    <option value="4">4 - საერთო გამოყენების</option>
                                    <option value="5">5 - დამხმარე გზები</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="cover_type">
                                    საფარის ტიპი
                                </label>

                                <select class="form-select" id="cover_type">
                                    <option selected></option>
                                    <option value="1">2 - ასფალტი</option>
                                    <option value="2">3 - მოხრეშილი</option>
                                    <option value="3">5 - დაფარ. ადგ. მასალით</option>
                                    <option value="4">8 - მკვრივი გრუნტი</option>
                                    <option value="5">9 - გრუნტის</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="carriageway_width">
                                    გზის სავალი ნაწილის სიგანე 0,1 მ სიზუსტით
                                </label>

                                <input type="number" class="form-control" id="carriageway_width">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="seasonal_action">
                                    სეზონური მოქმედება
                                </label>

                                <select class="form-select" id="seasonal_action">
                                    <option selected></option>
                                    <option value="1">2 - ზაფხ.</option>
                                    <option value="2">4 - ზამთ.</option>
                                    <option value="3">5 - მთელი წლის განმავ.</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="requires_measures">
                                    საჭიროებს ღონისძიებებს (სიგრძე, სიზუსტით 1კმ-მდე)
                                </label>

                                <input type="number" class="form-control" id="requires_measures">
                            </div>
                        </div>
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
                        <div class="row row-cols-lg-auto row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="accounting_category">
                                    აღრიცხვის კატეგორია
                                </label>

                                <select class="form-select" id="accounting_category">
                                    <option selected></option>
                                    <option value="1">2 - სამკურნალო ნედლეური</option>
                                    <option value="2">7 - კენკროვნები</option>
                                    <option value="3">8 - სოკოები</option>
                                    <option value="4">9 - იშვიათი მცენ.</option>

                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="plants_type">
                                    მცენარეთა სახეობა
                                </label>

                                <select class="form-select" id="plants_type">
                                    <option selected></option>
                                    <option value="1">1 - მოცვი მაღალმთის</option>
                                    <option value="2">2 - მოცვი შავი</option>
                                    <option value="3">3 - მარწყვი</option>
                                    <option value="4">4 - ხენდრო</option>
                                    <option value="5">5 - ცხრატყავა (წერწა)</option>
                                    <option value="6">6 - ასკილი</option>
                                    <option value="7">7 - ჟოლო</option>
                                    <option value="8">8 - მოცხარი წითელი</option>
                                    <option value="9">9 - მოცხარი შავი</option>
                                    <option value="10">10 - ჭნავი</option>
                                    <option value="11">11 - ქაცვი</option>
                                    <option value="12">12 - შოთხვი</option>
                                    <option value="13">13 - მაყვალი</option>
                                    <option value="14">14 - შინდი</option>
                                    <option value="15">15 - რეზერვი</option>
                                    <option value="16">16 - კატაბალახა</option>
                                    <option value="17">17 - შოთხვი</option>
                                    <option value="18">18 - კოთხუჯი</option>
                                    <option value="19">19 - სამკურნალო ტუხტი</option>
                                    <option value="20">20 - ბელადონა</option>
                                    <option value="21">21 - წითელი კუნელი</option>
                                    <option value="22">22 - უკვდავა</option>
                                    <option value="23">23 - შროშანა</option>
                                    <option value="24">24 - ყვითელი ცხვირისატეხელია</option>
                                    <option value="25">25 - ქაცვი</option>
                                    <option value="26">26 - კულმუხო</option>
                                    <option value="27">27 - ვირის ტერფა</option>
                                    <option value="28">28 - წითელი ფუტკარა</option>
                                    <option value="29">29 - სამკურნალო გვირილა</option>
                                    <option value="30">30 - რიხტერის მლაშოპურა</option>
                                    <option value="31">31 - ასკილი</option>
                                    <option value="32">32 - სამკურნალო სალბი</option>
                                    <option value="33">32 - სამკურნალო სალბი</option>
                                    <option value="34">33 - დათვის სოკო</option>
                                    <option value="35">34 - დუმა სოკო</option>
                                    <option value="36">35 - მჭადა სოკო</option>
                                    <option value="37">36 - წითლიო</option>
                                    <option value="38">37 - მიქლიო</option>
                                    <option value="39">38 - მანჭკვალას მატყუარა</option>
                                    <option value="40">39 - ქამა სოკო</option>
                                    <option value="41">40 - მანჭკვალა</option>
                                    <option value="42">41 - მერცხალა სოკო</option>
                                    <option value="43">42 - ნიყვი</option>
                                    <option value="44">43 - ხარისფაშვა</option>
                                    <option value="45">44 - გუდაფშუკა</option>
                                    <option value="46">45 - შხამა სოკო</option>
                                    <option value="47">46 - ხეთა მხალი</option>
                                    <option value="48">47 - ირემა სოკო</option>
                                    <option value="49">48 - წითელშხამა</option>
                                    <option value="50">49 - ვარსკვლავა სოკო</option>
                                    <option value="51">50 - ყვითელი საჩეჩელა</option>
                                    <option value="52">51 - ჩიტიბუდა</option>
                                    <option value="53">52 - რეზერვი</option>
                                    <option value="54">53 - რეზერვი</option>
                                    <option value="55">54 - რეზერვი</option>
                                    <option value="56">55 - რეზერვი</option>
                                    <option value="57">56 - წივანა</option>
                                    <option value="57">57 - ანჩხლი</option>
                                    <option value="57">58 - ჩადუნა</option>
                                    <option value="57">59 - გვიმრა</option>
                                    <option value="57">60 - შავი გვიმრა</option>
                                    <option value="57">61 - ისლი</option>
                                    <option value="57">62 - მოლოზანა</option>
                                    <option value="57">63 - ხავსი</option>
                                    <option value="57">64 - მჟაველა</option>
                                    <option value="57">65 - ქრისტესბეჭედა</option>
                                    <option value="57">66 - ხარისთვალა</option>
                                    <option value="57">67 - ნაღველა</option>
                                    <option value="57">68 - ბრძამი</option>

                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="coverage_percent">
                                    დაფარვის %
                                </label>

                                <input type="number" class="form-control" id="coverage_percent">
                            </div>
                        </div>
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
                        <div class="row row-cols-lg-4 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="event_code">
                                    ღონისძიების შიფრი
                                </label>

                                <select class="form-select" id="event_code">
                                    <option selected></option>
                                    <option value="1">1 - პირწმინდა ჭრა</option>
                                    <option value="2">5 - თანდათანობითი ორ ჯერიანი ჭრა</option>
                                    <option value="3">7 - ჯგუფურ-ამორჩვეითი ჭრა</option>
                                    <option value="4">8 - ნებით-ამორჩევითი ჭრა</option>
                                    <option value="5">11 - დაავადებული ხეების ჭრა</option>
                                    <option value="6">12 - რეკონსტრუქციული პირწმინდა ჭრა</option>
                                    <option value="7">13 - რეკონსტრუქციული ნაწილობრივი ჭრა</option>
                                    <option value="8">14 - სპეციალური ჭრა ამორჩევით</option>
                                    <option value="9">15 - მარადმწვანე ქვეტყის ჭრა ზოლებად</option>
                                    <option value="10">16 - სანიტარილი ჭრა</option>
                                    <option value="11">17 - ჩახერგილობის გაწმენდა</option>
                                    <option value="12">18 - ზეხმელის ჭრა</option>
                                    <option value="13">19 - სპეციალური პირწმინდა ჭრა</option>
                                    <option value="14">20 - განათებითი ჭრა</option>
                                    <option value="15">25 - გაწმენდითი ჭრა</option>
                                    <option value="16">30 - გამოხშირვითი ჭრა</option>
                                    <option value="17">35 - გავლითი ჭრა</option>
                                    <option value="18">36 - ერთეული ხეების ჭრა</option>
                                    <option value="19">50 - ტყის კულტურები ღია ფართობზე</option>
                                    <option value="20">51 - ტყის კულტურების რეკონსტრუქცია</option>
                                    <option value="21">55 - მინერალიზაცია ნიადაგის</option>
                                    <option value="22">56 - ბუნებრივი განახლების ხელისშეწყობა აჩიჩქვნა</option>
                                    <option value="23">57 - ტყის კულტურების მოვლა</option>
                                    <option value="24">60 - ბუნებრივი განახლების ხელისშეწყობა შეღობვა</option>
                                    <option value="25">64 - ტყის კულტურების დამატება</option>
                                    <option value="26">65 - ბუნებრივი განახლება - გაწმენდა, შერგვა/შეთესვა</option>
                                    <option value="27">66 - სანერგეების მოწყობა 67 - პლანტაციების მოწყობა</option>
                                    <option value="28">74 - ბაქნებად ნიადაგის დამუშავება</option>
                                    <option value="29">75 - საქონლის ძოვება</option>
                                    <option value="30">82 - ბუჩქნარების მოჭრა სათიბებზე</option>
                                    <option value="31">86 - ძირეული გაუმჯობესება სათიბების</option>
                                    <option value="32">87 - ზედაპირული გაუმჯობესება სათიბების</option>
                                    <option value="33">91 - სირონების გაჭრა 92 - სირონების გაწმენდა</option>
                                    <option value="34">94 - ანშლანგების დაყენება 95 - შეკეთება</option>
                                    <option value="35">96 - კაპიტალური შეკეთება</option>
                                    <option value="36">97 - დასასვენებელი ადგილების მოწყობა</option>
                                    <option value="37">106 - ტურისტული თავშეყრის ადგილების მოწყობა</option>
                                    <option value="38">107 - პარკირების ადგილების მოწყობა</option>
                                    <option value="39">121 - გზების შეკეთება</option>
                                    <option value="40">130 - სამკურნალო ნედლეულის დამზადება</option>
                                    <option value="41">134 - კენკროვნების დამზადება</option>
                                    <option value="42">140 - ძოვება აკრძალულია</option>
                                    <option value="43">141 - გათიბვა აკრძალულია</option>
                                    <option value="44">144 - მელიორაცია</option>

                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="events_year">
                                    ღონისძიებების ჩატარების წელი
                                </label>

                                <input type="number" class="form-control" id="events_year">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="woody_type">
                                    მერქნიანი სახეობა
                                </label>

                                <select class="form-select" id="woody_type">
                                    <option selected></option>
                                    <option value="1">1 - ერთი</option>
                                    <option value="2">2 - ორი</option>

                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="stock_m3ha">
                                    მარაგი მ3/ჰა-ზე
                                </label>

                                <input type="number" class="form-control" id="stock_m3ha">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="performance_analysis">
                                    შესრულების ანალიზი
                                </label>

                                <select class="form-select" id="performance_analysis">
                                    <option selected></option>
                                    <option value="1">1 - დაპრ. და ჩატ.დასაბუთ.</option>
                                    <option value="2">2 - დაუსაბუთ.</option>
                                    <option value="3">3 - დაპრ. არ ჩატ.დასაბუთ.</option>
                                    <option value="4">4 - არ დაპრ.ჩატ.დასაბუთ.</option>
                                    <option value="5">5 - დასაბუთ.</option>
                                    <option value="6">6 - დაუსაბუთებ.</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="rate">
                                    შეფასება
                                </label>

                                <select class="form-select" id="rate">
                                    <option selected></option>
                                    <option value="1">2 - არადამაკმაყოფილებელია</option>
                                    <option value="2">3 - დამაკმაყოფილებელია</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="unsatisfactory_reasons">
                                    არადამაკმაყოფილებების შესრულების მიზეზები
                                </label>

                                <select class="form-select" id="unsatisfactory_reasons">
                                    <option selected></option>
                                    <option value="1">30 - არასაკმარისი ინტენსივობა</option>
                                    <option value="2">31 - გადაჭარბებული ინტენსივობა</option>
                                    <option value="3">32 - საუკეთესო ეგზემპლიარების მოჭრა</option>
                                    <option value="4">33 - უვარგისი ეგზემპლიარების დატოვება</option>
                                    <option value="5">34 - კორომი დეგრადირებულია</option>
                                    <option value="6">35 - ჩატარებულია უბნის ნაწილზე</option>
                                    <option value="7">36 - მოზარდის დაზიანება</option>
                                    <option value="8">37 - ტყესაკაფის უხარისხო გაწმენდა</option>
                                    <option value="9">38 - ჭრის წესის დარღვევა</option>
                                    <option value="10">39 - შუახნოვანი და მომწიფარი ხეების მოჭრა</option>
                                    <option value="11">40 - რეზერვი</option>
                                    <option value="12">41 - რეზერვი</option>
                                    <option value="13">42 - რეზერვი</option>
                                    <option value="14">43 - რეზერვი</option>
                                    <option value="15">44 - რეზერვი</option>
                                    <option value="16">45 - რეზერვი</option>
                                    <option value="17">46 - რეზერვი</option>
                                    <option value="18">47 - რეზერვი</option>
                                    <option value="19">48 - რეზერვი</option>
                                    <option value="20">49 - რეზერვი</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="area_ha">
                                    ფართობი, ჰა
                                </label>

                                <input type="number" class="form-control" id="area_ha">
                            </div>
                        </div>
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
                        <div class="row row-cols-lg-4 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="raw_material_category">
                                    ნედლეულის კატეგორია
                                </label>

                                <select class="form-select" id="raw_material_category">
                                    <option selected></option>
                                    <option value="1">6 - ქერქი</option>
                                    <option value="2">10 - ფესვები</option>
                                    <option value="3">12 - ფოთლები</option>
                                    <option value="4">15 - კაკალი</option>
                                    <option value="5">18 - ნაყოფი</option>
                                    <option value="6">24 - ნეკერი</option>
                                    <option value="7">26 - ყვავილები</option>
                                    <option value="8">28 - კენკროვანი</option>

                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="woody_species">
                                    მერქნიანი სახეობა
                                </label>

                                <select class="form-select" id="woody_species">
                                    <option selected></option>
                                    <option value="1">1 - ერთი</option>
                                    <option value="2">2 - ორი</option>

                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="abundance_year">
                                    ხნოვანება, წელი
                                </label>

                                <input type="number" class="form-control" id="abundance_year">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="height">
                                    სიმაღლე, 0,1მ სიზუსტით
                                </label>

                                <input type="number" class="form-control" id="height">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="measurement_units">
                                    ზომის ერთეული
                                </label>

                                <select class="form-select" id="measurement_units">
                                    <option selected></option>
                                    <option value="1">1 - კგ</option>
                                    <option value="2">2 - ტ</option>
                                    <option value="3">3 - მ3</option>

                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="yield_per">
                                    მოსავლიანობა 1 ჰა-ზე სიზუსტით 0,1-მდე
                                </label>

                                <input type="number" class="form-control" id="yield_per">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="collection_accessible">
                                    მისადგომი შეგროვებისათვის
                                </label>

                                <select class="form-select" id="collection_accessible">
                                    <option selected></option>
                                    <option value="1">1 - მიწიდან</option>
                                    <option value="2">2 - მექ.მოწყობ. და ხმარ.</option>
                                    <option value="3">3 - სპეც.მოწყ.დახმარებ.</option>

                                </select>
                            </div>

                        </div>
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
                        <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="chaobis_tipi">
                                    19.1. ჭაობის ტიპი
                                </label>

                                <select class="form-select" id="chaobis_tipi">
                                    <option value="1">1- დაბლობის</option>
                                    <option value="2">2- მაღლობის</option>
                                    <option value="3">3- გარდამავალი</option>
                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="tke_mcenareulobis_tipi">
                                    19.2. ტყე-მცენარეულობის ტიპი
                                </label>

                                <select class="form-select" id="tke_mcenareulobis_tipi">
                                    <option value="1">1- ისლიანი</option>
                                    <option value="2">2- ღეღიანი</option>
                                    <option value="3">3- ისლ-ღეღიანი</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="torfiani_fenis_simkrive">
                                    19.3. ტორფიანი ფენის სიმკრივე
                                </label>

                                <input type="number" class="form-control" step="0.1" min="0.1" max="9.9" id="torfiani_fenis_simkrive">
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="merkniani_saxeoba">
                                    19.4. მერქნიანი სახეობა (თუ ჭაობი დაბურულია - ძირ.შიფრ.ცხრლ)
                                </label>

                                <select class="form-select" id="merkniani_saxeoba">
                                    <option value="1">1- Fagus</option>
                                    <option value="2">2- Carpinus</option>
                                    <option value="3">3- Quercus</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="daburulobis_procenti">
                                    19.5. დაბურულობის პროცენტი
                                </label>

                                <input type="number" class="form-control" step="1" min="5" max="100" id="daburulobis_procenti">
                            </div>
                        </div>
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
                        <div class="row row-cols-lg-4 row-cols-md-3 row-cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="peizazhuri_tipebi">
                                    21.1. პეიზაჟური ტიპები
                                </label>

                                <select class="form-select" id="peizazhuri_tipebi">
                                    <option value="1">11- დახურული ჰორიზონტალური შეკრულობით</option>
                                    <option value="2">12- დახურული ვერტიკალურული შეკრულობით</option>
                                    <option value="3">21- ნახევრად ღია თანაბარი გავრცხელების</option>
                                    <option value="4">22- ნახევრად ღია ჯგუფური გავრცხელების</option>
                                    <option value="5">31- მეჩხერები</option>
                                    <option value="6">32- უბნები ერთეული ხეებით</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="estetikuri_shefaseba">
                                    21.2. ესთეყიკური შეფასება
                                </label>

                                <select class="form-select" id="estetikuri_shefaseba">
                                    <option value="1">1- 1 კლასი</option>
                                    <option value="2">2- 2 კლასი</option>
                                    <option value="3">3- 3 კლასი</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="rekreaciuli_shefaseba">
                                    21.3. რეკრეაციული შეფასება
                                </label>

                                <select class="form-select" id="rekreaciuli_shefaseba">
                                    <option value="1">1- მაღალი</option>
                                    <option value="2">2- საშუალო</option>
                                    <option value="3">3- დაბალი</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="mdgradoba">
                                    21.4. მდგრადობა
                                </label>

                                <select class="form-select" id="mdgradoba">
                                    <option value="1">1- 1 კლასი</option>
                                    <option value="2">2- 2 კლასი</option>
                                    <option value="3">3- 3 კლასი</option>
                                    <option value="3">4- 4 კლასი</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="ubnis_gasavloba">
                                    21.5. უბნის გასავლობა
                                </label>

                                <select class="form-select" id="ubnis_gasavloba">
                                    <option value="1">4- კარგი</option>
                                    <option value="2">3- საშუალო</option>
                                    <option value="3">2- ცუდი</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="ubnis_atvaliereba">
                                    21.6. უბნის ათვალიერება
                                </label>

                                <select class="form-select" id="ubnis_atvaliereba">
                                    <option value="1">4- კარგი</option>
                                    <option value="2">3- საშუალო</option>
                                    <option value="3">2- ცუდი</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="degradaciis_stadia">
                                    21.7. დეგრადაციის სტადია
                                </label>

                                <select class="form-select" id="degradaciis_stadia">
                                    <option value="1">1- 1 სტადია</option>
                                    <option value="2">2- 2 სტადია</option>
                                    <option value="3">3- 3 სტადია</option>
                                    <option value="4">4- 4 სტადია</option>
                                    <option value="5">5- 5 სტადია</option>
                                </select>
                            </div>

                            <div class="col mt-lg-0 mt-3">
                                <label class="form-label text-truncate w-100" for="ark_formebi">
                                    21.8. მცირე არქიტექტორული ფორმები
                                </label>

                                <select class="form-select" id="ark_formebi">
                                    <option value="1">100- სტენდური აგიტაცია</option>
                                    <option value="2">200- დეკორ.სკულპტ</option>
                                    <option value="3">300- მცირე დროის დასას. ადგილები</option>
                                    <option value="4">500- კეთილ მოწყობილი ადგილები</option>
                                </select>
                            </div>
                        </div>
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
                        <div class="mb-3">
                            <label for="additional_information_comments" class="form-label">კომენტარები</label>
                            <input type="text" class="form-control" id="additional_information_comments">
                        </div>

                        <div>
                            <label for="additional_information_other" class="form-label">დამატებითი</label>
                            <textarea class="form-control" id="additional_information_other" rows="3"></textarea>
                        </div>
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
                        <div class="row row-cols-md-2 cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="niadagis_jgufi">
                                    24.1. ნიადაგის ჯგუფი
                                </label>

                                <select class="form-select" id="niadagis_jgufi">
                                    <option value="0"></option>
                                    <option value="1">იხ.შიფ.ცხრ.კონკრ.ობიექტ.ადგენს პროექტის ავტორი</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="niadagis_meqanikuri_shemadgenloba">
                                    24.2. ნიადაგის მექანიკური შემადგენლობა
                                </label>

                                <select class="form-select" id="niadagis_meqanikuri_shemadgenloba">
                                    <option value="0"></option>
                                    <option value="1">1 - ქვიშნარი</option>
                                    <option value="2">2 - თიხნარი</option>
                                    <option value="3">3 - მსუბუქ.თიხნ.</option>
                                    <option value="4">4 - საშ.თიხნარი</option>
                                    <option value="5">5 - ძლიერი თიხნ</option>
                                    <option value="6">6 - თიხა</option>
                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="sinestis_xarisxi">
                                    24.3. სინესტის ხარისხი
                                </label>

                                <select class="form-select" id="sinestis_xarisxi">
                                    <option value="0"></option>
                                    <option value="1">1 - ძლიერ მშრალი</option>
                                    <option value="2">2 - მშრალი</option>
                                    <option value="3">3 - გრილი</option>
                                    <option value="4">4 - ტენიანი</option>
                                    <option value="5">5 - ჭარბტენიანი</option>
                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="dakordebis_xarisxi">
                                    24.4. დაკორდების ხარისხი
                                </label>

                                <select class="form-select" id="dakordebis_xarisxi">
                                    <option value="0"></option>
                                    <option value="1">1 - სუსტი</option>
                                    <option value="2">2 - საშუალო</option>
                                    <option value="3">3 - ძლიერი</option>
                                    <option value="4">4 - დაკორდება არ არის</option>
                                </select>
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="niadagis_simkvrive">
                                    24.5. ნიადაგის სიმკვრივე
                                </label>

                                <select class="form-select" id="niadagis_simkvrive">
                                    <option value="0"></option>
                                    <option value="1">1 - სუსტი</option>
                                    <option value="2">2 - საშუალო</option>
                                    <option value="3">3 - ძლიერი</option>
                                </select>
                            </div>

                            <div class="col mt-3">

                                <label class="form-label text-truncate w-100" for="dedaqanis_dafarulobis_proc">
                                    24.6. დედაქანის დაფარულობის % (ეროზირებული და ჩამორეცხილი ნიადაგის აღწერის დროს 5-100%)
                                </label>

                                <input type="number" class="form-control" step="1" min="5" max="100" id="dedaqanis_dafarulobis_proc">
                            </div>
                        </div>

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
                        <div class="row row-cols-md-2 cols-1 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="plantaciis_dasaxeleba">
                                    25.1. პლანტაციის დასახელება
                                </label>

                                <select class="form-select" id="plantaciis_dasaxeleba">
                                    <option value="0">ნუსხას ადგენს პროექტის ავტორი</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="dargvis_weli">
                                    25.2. დარგვის წელი (ბოლო ორი ციფრი)
                                </label>

                                <input type="number" class="form-control" step="1" min="01" max="99" id="dargvis_weli">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="rigebs_shoris_manZili">
                                    25.3. რიგებს შორის მანძილი (სიზუსტით 0,1-მდე)
                                </label>

                                <input type="number" class="form-control" step="0.1" min="0.1" max="99.9" id="rigebs_shoris_manZili">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="dashoreba_rigshi">
                                    25.4. დაშორება რიგში (სიზუსტით 0,1-მდე)
                                </label>

                                <input type="number" class="form-control" step="0.1" min="0.1" max="99.9" id="dashoreba_rigshi">
                            </div>

                            <div class="col mt-3">
                                <label class="form-label text-truncate w-100" for="xeTa_faqtiuri_raodenoba">
                                    25.5. ხეთა ფაქტიური რაოდენობა 1000ც/ჰა
                                </label>

                                <input type="number" class="form-control" id="xeTa_faqtiuri_raodenoba">
                            </div>
                        </div>
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
                        <label class="form-label text-truncate w-100" for="seleqciuri_shefasebis_machvenebeli">
                            26.1. სელექციური შეფასების მაჩვენებლები
                        </label>

                        <select class="form-select" id="seleqciuri_shefasebis_machvenebeli">
                            <option value="0"></option>
                            <option value="1">1 - მინუსური</option>
                            <option value="2">2 - ნორმალური</option>
                            <option value="3">3 - პლიუსური</option>
                        </select>
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
                        <div class="row row-cols-lg-auto row-cols-md-3 row-cols-2 m-0">
                            <div class="col">
                                <label class="form-label text-truncate w-100" for="river">მდინარე</label>

                                <select class="form-select" id="river">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col">
                                <label class="form-label text-truncate w-100" for="well">წყარო</label>

                                <select class="form-select" id="well">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div class="col mt-md-0 mt-3">
                                <label class="form-label text-truncate w-100" for="river_width">მდინარის სიგანე</label>

                                <input type="number" class="form-control" id="river_width"/>
                            </div>
                        </div>
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

export default {
    name: 'IndexInvAPP',

    components: {
        Maketi10,
        Maketi4,
        Maketi3,
        Maketi2,
        Maketi1
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus {
    box-shadow: unset !important;
}

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