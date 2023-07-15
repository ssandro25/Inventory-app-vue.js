<template>
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
</template>

<script setup></script>