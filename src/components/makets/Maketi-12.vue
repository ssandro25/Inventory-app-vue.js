<template>
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
</template>

<script setup>

</script>


<style scoped>

</style>