<template>
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
</template>

<script setup></script>