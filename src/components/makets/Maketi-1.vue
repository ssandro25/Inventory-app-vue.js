<template>
<div>
    <div class="d-flex align-items-center justify-content-between px-2 mb-3">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="empty_layout_one" v-model="empty_layout_one">
            <label class="form-check-label" for="empty_layout_one">
                მაკეტის გამოტოვება
            </label>
        </div>

        <div>
            <button type="button" class="btn border-0 p-0" data-bs-toggle="modal" data-bs-target="#modalItemOne">
                <i class="fa-solid fa-circle-question"></i>
            </button>
        </div>
    </div>

    <div class="row m-0">
        <div class="col-md-6">
            <label class="form-label text-truncate w-100" for="soil_category">1.1 მიწის
                კატეგორია</label>

            <select class="form-select" id="soil_category" :disabled="empty_layout_one">
                <option selected></option>
                <option value="1">3 - კორომი ბუნებრივი წარმოშობის</option>
                <option value="2">4 - ბუნებრივი ხელუხლებელი ტყე</option>
                <option value="3">5 - ბიოლოგიური 0,1-0,4 სიხშირის კორომი</option>
                <option value="4">6 - ნაბელი კორომი</option>
                <option value="5">7 - კორომი რეკონსტრუქციის სტადიაში</option>
                <option value="6">8 - კორომი, რომლის შემადგენლობაში არის ხელოვნურად წარმოშობილი სახეობა</option>
                <option value="7">9 - კორომი საბურველ ქვეშ კრონაშეუკვრელი კულტურებით</option>
                <option value="8">10 - ვარჯშეკრული ტყის კულტურები</option>
                <option value="9">11 - რეკონსტრუქციით მიღებული კულტურები</option>
                <option value="10">17 - კულტურები რეკონსტრუქციის სტადიაში</option>
                <option value="11">31 - ვარჯშეუკვრელი კულტურები</option>
                <option value="12">40 - სანერგე</option>
                <option value="13">41 - პლანტაციები მერქნის მისაღებად</option>
                <option value="14">53 - ნახანძრალი</option>
                <option value="15">54 - დაღუპული კორომი</option>
                <option value="16">57 - ტყენაკაფი</option>
                <option value="17">60 - ველობი</option>
                <option value="18">61 - უტყეო სივრცე</option>
                <option value="19">72 - ლანდშაფტური ველობი</option>
                <option value="20">82 - სახნავი</option>
                <option value="21">83 - სათიბი</option>
                <option value="22">84 - საძოვარი (გასადევარი)</option>
                <option value="23">87 - საქონლის გადასარეკი ტრასა</option>
                <option value="24">101 - ტბა</option>
                <option value="25">102 - მდინარე</option>
                <option value="26">103 - ნაკადულები</option>
                <option value="27">104 - საგუბარი</option>
                <option value="28">105 - წყალსაცავი</option>
                <option value="29">106 - არხები</option>
                <option value="30">107 - მელიორაციული არხები</option>
                <option value="31">108 - საკალმახე</option>
                <option value="32">109 - წყლის ბასეინი</option>
                <option value="33">110 - ბაღი</option>
                <option value="34">111 - ვენახი</option>
                <option value="35">112 - თუთის პლანტაცია</option>
                <option value="36">114 - ბოსტანი</option>
                <option value="37">115 - კულტურული კენკრის ბაღი</option>
                <option value="38">113 - ბოსტანი სამრეწველო მნიშვნელობის </option>
                <option value="39">121 - რკინიგზა</option>
                <option value="40">123 - გზები</option>
                <option value="41">128 - მუდმივი ბილიკები </option>
                <option value="42">129 - საკვარტალე სირონები</option>
                <option value="43">140 - ხანძარსაწინააღმდეგო ზოლები </option>
                <option value="44">161 - საკარმოდამო ნაკვეთი</option>
                <option value="45">162 - კორდონები</option>
                <option value="46">163 - კერძო (მიტაცებული) საკარმიდამო ნაკვეთი</option>
                <option value="47">164 - ხე-ტყის საწყობი</option>
                <option value="48">165 - საფუტკრე</option>
                <option value="49">168 - ეკლესია, მონასტერი</option>
                <option value="50">170 - კემპინგი</option>
                <option value="51">171 - სპორტული მოედანი</option>
                <option value="52">172 - სხვადასხვა დასასვენებელი ნაგებობები</option>
                <option value="53">179 - ისტორიულ-არქიტექტორული ძეგლი</option>
                <option value="54">182 - პლიაჟი</option>
                <option value="55">185 - სასაფლაო</option>
                <option value="56">210 - გამოუყენებელი მიწები</option>
                <option value="57">211 - ხევები</option>
                <option value="58">212 - ხრამები</option>
                <option value="59">213 - ღვარცოფის მუდმივი კალაპოტი</option>
                <option value="60">214 - გაშიშვლებული ფერდობი</option>
                <option value="61">215 - ქვანაყარი</option>
                <option value="62">216 - ქვიშები</option>
                <option value="63">217 - ჭაობი</option>
                <option value="64">218 - კლდეები</option>
                <option value="65">219 - ზვავის მუდმივი კალაპოტი</option>
                <option value="66">220 - ჩამონაშალი</option>
                <option value="67">221 - მეწყერი</option>
                <option value="68">225 - მყინვარი</option>
                <option value="69">227 - მდინარის კალაპოტი</option>
                <option value=70>232 - კარსტული წარმონაქმნი</option>
                <option value=71>240 - კარიერები</option>
                <option value=72>241 - ტორფის დამუშავების ადგილი</option>
                <option value=73>243 - ნაგვის დასაყრელი ადგილი</option>
                <option value=74>244 - ჭაბურღილი</option>
                <option value=75>245 - საბაგირო</option>
                <option value=76>248 - ელექტროგადამცემი ხაზები </option>
                <option value=77>249 - კავშირგაბმულობის ხაზები</option>
                <option value=78>250 - გაზსადენები</option>
                <option value=79>251 - ნავთობსადენი</option>
                <option value=80>252 - წყალსადენი</option>
                <option value=81>256 - საბაგირო გზა</option>
            </select>
        </div>

        <div class="col-md-6 mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="xs">1.2 ხს</label>

            <select class="form-select" id="xs" :disabled="empty_layout_one">
                <option selected>(ხანგრძლივ ვადიანი სარგებლობა, იჯარა)</option>
                <option value="1">5 - თანდათანობითი ჭრა</option>
                <option value="2">6 - ჯგუფურ-ამორჩევითი ჭრა</option>
                <option value="3">7 - ნებით-ამორჩევითი ჭრა</option>
                <option value="4">8 - ხანგრძლივი თანდათანობითი ჭრა</option>
                <option value="5">9 - პირწმინდა ჭრები</option>

            </select>
        </div>

        <div class="col-md-6 mt-3">
            <label class="form-label text-truncate w-100" for="gfdu">1.3 გ.ფ.დ.უ.</label>

            <select class="form-select" id="gfdu" :disabled="empty_layout_one">
                <option selected>გფდუ (არ შემივსია) -მგონი საერთოდ ამოვიღებთ</option>
                <option value="1">ერთი</option>
                <option value="2">ორი</option>
                <option value="3">ხუთასი</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="exposure">1.4 ექსპოზიცია</label>

            <select class="form-select" id="exposure" :disabled="empty_layout_one">
                <option selected>ექსპოზიცია</option>
                <option value="1">ჩ</option>
                <option value="2">ჩდ</option>
                <option value="3">ჩა</option>
                <option value="4">ს</option>
                <option value="5">სდ</option>
                <option value="6">სა</option>
                <option value="7">ა</option>
                <option value="8">დ</option>

            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="slope">1.5 დაქანება</label>

            <select class="form-select" id="slope" :disabled="empty_layout_one">
                <option selected>დაქანება</option>
                <option value="1">0-5</option>
                <option value="2">6-10</option>
                <option value="3">11-15</option>
                <option value="4">16-20</option>
                <option value="5">21-25</option>
                <option value="6">26-30</option>
                <option value="7">31-35</option>
                <option value="8">36+</option>

            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="szd">1.6 ს.ზ.დ.</label>

            <select class="form-select" id="szd" :disabled="empty_layout_one">
                <option selected>ს.ზ.დ</option>
                <option value="1">0-250</option>
                <option value="2">251-500</option>
                <option value="3">501-750</option>
                <option value="4">751-100</option>
                <option value="5">1001-1250</option>
                <option value="6">1251-1500</option>
                <option value="7">1501-1750</option>
                <option value="8">1751-2000</option>
                <option value="9">2001-2250</option>
                <option value="10">2251-2500</option>
                <option value="11">2501-2750</option>
                <option value="12">2751-3000</option>

            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="erosion_type">1.7 ეროზიის სახე</label>

            <select class="form-select" id="erosion_type" :disabled="empty_layout_one">
                <option selected>ეროზიის სახე</option>
                <option value="1">1 - წყლისმიერი</option>
                <option value="2">2 - ქარისმიერი</option>

            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="erosion_degree">1.8 ეროზიის
                ხარისხი</label>

            <select class="form-select" id="erosion_degree" :disabled="empty_layout_one">
                <option selected>ეროზიის ხარისხი</option>
                <option value="1">1 - სუსტი</option>
                <option value="2">2 - საშუალო</option>
                <option value="3">3 - ძლიერი</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="area">1.9 ფართობი</label>

            <input type="number" class="form-control" id="area" :disabled="empty_layout_one"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Maketi-1',

    data() {
        return {
            empty_layout_one: false
        }
    }
}
</script>

