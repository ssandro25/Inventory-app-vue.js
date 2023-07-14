<template>
<div>
    <div class="row row-cols-lg-5 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="event_first">2.1 ღონისძიება I</label>

            <select class="form-select" id="event_first">
                <option selected>ღონისძიების სახე</option>
                <option value="1">1 - პირწმინდა ჭრა</option>
                <option value="2">5 - თანდათანობითი ორ ჯერიანი ჭრა</option>
                <option value="3">7 - ჯგუფურ-ამორჩვეითი ჭრა</option>
                <option value="4">8 - ნებით-ამორჩევითი ჭრა</option>
                <option value="5">11 - დაავადებული ხეების ჭრა</option>
                <option value="6">12 - რეკონსტრუქციული პირწმინდა ჭრა </option>
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
                <option value="27">66 - სანერგეების მოწყობა</option>
                <option value="28">67 - პლანტაციების მოწყობა</option>
                <option value="29">74 - ბაქნებად ნიადაგის დამუშავება</option>
                <option value="30">75 - საქონლის ძოვება</option>
                <option value="31">82 - ბუჩქნარების მოჭრა სათიბებზე</option>
                <option value="32">86 - ძირეული გაუმჯობესება სათიბების</option>
                <option value="33">87 - ზედაპირული გაუმჯობესება სათიბების</option>
                <option value="34">91 - სირონების გაჭრა</option>
                <option value="35">92 - სირონების გაწმენდა</option>
                <option value="36">94 - ანშლანგების დაყენება</option>
                <option value="37">95 - შეკეთება</option>
                <option value="38">96 - კაპიტალური შეკეთება</option>
                <option value="39">97 - დასასვენებელი ადგილების მოწყობა</option>
                <option value="40">106 - ტურისტული თავშეყრის ადგილების მოწყობა</option>
                <option value="41">107 - პარკირების ადგილების მოწყობა</option>
                <option value="42">121 - გზების შეკეთება</option>
                <option value="43">130 - სამკურნალო ნედლეულის დამზადება</option>
                <option value="44">134 - კენკროვნების დამზადება</option>
                <option value="45">140 - ძოვება აკრძალულია</option>
                <option value="46">141 - გათიბვა აკრძალულია</option>
                <option value="47">144 - მელიორაცია</option>



            </select>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="percent">2.2 %</label>

            <input type="number" class="form-control" id="percent" disabled>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="event_second">2.3 ღონისძიება II</label>

            <select class="form-select" id="event_second">
                <option selected>ღონისძიების სახე</option>
                <option value="1">1 - პირწმინდა ჭრა</option>
                <option value="2">5 - თანდათანობითი ორ ჯერიანი ჭრა</option>
                <option value="3">7 - ჯგუფურ-ამორჩვეითი ჭრა</option>
                <option value="4">8 - ნებით-ამორჩევითი ჭრა</option>
                <option value="5">11 - დაავადებული ხეების ჭრა</option>
                <option value="6">12 - რეკონსტრუქციული პირწმინდა ჭრა </option>
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
                <option value="27">66 - სანერგეების მოწყობა</option>
                <option value="28">67 - პლანტაციების მოწყობა</option>
                <option value="29">74 - ბაქნებად ნიადაგის დამუშავება</option>
                <option value="30">75 - საქონლის ძოვება</option>
                <option value="31">82 - ბუჩქნარების მოჭრა სათიბებზე</option>
                <option value="32">86 - ძირეული გაუმჯობესება სათიბების</option>
                <option value="33">87 - ზედაპირული გაუმჯობესება სათიბების</option>
                <option value="34">91 - სირონების გაჭრა</option>
                <option value="35">92 - სირონების გაწმენდა</option>
                <option value="36">94 - ანშლანგების დაყენება</option>
                <option value="37">95 - შეკეთება</option>
                <option value="38">96 - კაპიტალური შეკეთება</option>
                <option value="39">97 - დასასვენებელი ადგილების მოწყობა</option>
                <option value="40">106 - ტურისტული თავშეყრის ადგილების მოწყობა</option>
                <option value="41">107 - პარკირების ადგილების მოწყობა</option>
                <option value="42">121 - გზების შეკეთება</option>
                <option value="43">130 - სამკურნალო ნედლეულის დამზადება</option>
                <option value="44">134 - კენკროვნების დამზადება</option>
                <option value="45">140 - ძოვება აკრძალულია</option>
                <option value="46">141 - გათიბვა აკრძალულია</option>
                <option value="47">144 - მელიორაცია</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="event_third">2.4 ღონისძიება III</label>

            <select class="form-select" id="event_third">
                <option selected>ღონისძიების სახე</option>
                <option value="1">1 - პირწმინდა ჭრა</option>
                <option value="2">5 - თანდათანობითი ორ ჯერიანი ჭრა</option>
                <option value="3">7 - ჯგუფურ-ამორჩვეითი ჭრა</option>
                <option value="4">8 - ნებით-ამორჩევითი ჭრა</option>
                <option value="5">11 - დაავადებული ხეების ჭრა</option>
                <option value="6">12 - რეკონსტრუქციული პირწმინდა ჭრა </option>
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
                <option value="27">66 - სანერგეების მოწყობა</option>
                <option value="28">67 - პლანტაციების მოწყობა</option>
                <option value="29">74 - ბაქნებად ნიადაგის დამუშავება</option>
                <option value="30">75 - საქონლის ძოვება</option>
                <option value="31">82 - ბუჩქნარების მოჭრა სათიბებზე</option>
                <option value="32">86 - ძირეული გაუმჯობესება სათიბების</option>
                <option value="33">87 - ზედაპირული გაუმჯობესება სათიბების</option>
                <option value="34">91 - სირონების გაჭრა</option>
                <option value="35">92 - სირონების გაწმენდა</option>
                <option value="36">94 - ანშლანგების დაყენება</option>
                <option value="37">95 - შეკეთება</option>
                <option value="38">96 - კაპიტალური შეკეთება</option>
                <option value="39">97 - დასასვენებელი ადგილების მოწყობა</option>
                <option value="40">106 - ტურისტული თავშეყრის ადგილების მოწყობა</option>
                <option value="41">107 - პარკირების ადგილების მოწყობა</option>
                <option value="42">121 - გზების შეკეთება</option>
                <option value="43">130 - სამკურნალო ნედლეულის დამზადება</option>
                <option value="44">134 - კენკროვნების დამზადება</option>
                <option value="45">140 - ძოვება აკრძალულია</option>
                <option value="46">141 - გათიბვა აკრძალულია</option>
                <option value="47">144 - მელიორაცია</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="target_species">2.5 მიზნობრივი
                სახეობა</label>

            <select class="form-select" id="target_species">
                <option selected>დასაზუსტებელია</option>
                <option value="1">წფ</option>
                <option value="2">რც</option>
                <option value="3">ნძ და სხვები</option>
            </select>
        </div>
    </div>
</div>
</template>

<script setup>

</script>


<style scoped>

</style>