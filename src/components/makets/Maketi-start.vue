<template>
<div>
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
                <option v-for="item in martvisOrgano" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100">
                ადმინისტრაცია
            </label>

            <select v-model="administraciaSelect" class="form-select" id="erovnuli_satkeo_saagento">
                <option selected>აირჩიეთ ადმინისტრაცია</option>
                <option v-for="item in administracia" :key="item" >{{item.name}}</option>
            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="satkeo_ubani">
                სატყეო უბანი:
                <span v-if="administraciaSelect !== 'აირჩიეთ ადმინისტრაცია'" class="fw-bold">{{ administraciaSelect }}</span>
            </label>

            <select v-if="administraciaSelect === '1 - კახეთი'" v-model="kaxeti" class="form-select" id="satkeo_ubani">
                <option v-for="item in kaxetiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '2 - ქვემო ქართლი'" v-model="kvemo_kartli"  class="form-select" id="satkeo_ubani">
                <option v-for="item in kvemoKartliSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '3 - შიდა ქართლი'" v-model="shida_kartli" class="form-select" id="satkeo_ubani">
                <option v-for="item in shidaKartliSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '4 - მცხეთა-მთიანეთი'" v-model="mcxeta_mtianeti" class="form-select" id="satkeo_ubani">
                <option v-for="item in mcxetaMtianetiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '5 - იმერეთი'" v-model="imereti" class="form-select" id="satkeo_ubani">
                <option v-for="item in imeretiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '6 - სამეგრელო-ზემო სვანეთი'" v-model="samegrelo_zemo_svaneti" class="form-select" id="satkeo_ubani">
                <option v-for="item in samegreloZemoSvanetiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '7 - სამცხე-ჯავახეთი'" v-model="samcxe_javaxeti" class="form-select" id="satkeo_ubani">
                <option v-for="item in samcxeJavaxetiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '8 - რაჭა-ლეჩხუმი ქვემო სვანეთი'" v-model="racha_lechxumi_kvemo_svaneti" class="form-select" id="satkeo_ubani">
                <option v-for="item in rachaLechxumiKvemoSvanetiSatkeoUbani" :key="item">{{item.name}}</option>
            </select>

            <select v-if="administraciaSelect === '9 - გურია'" class="form-select" v-model="guria" id="satkeo_ubani">
                <option v-for="item in guriaSatkeoUbani" :key="item">{{item.name}}</option>
            </select>
        </div>

        <div class="col mt-3">
            <!--  კახეთი -->
            <div v-if="administraciaSelect === '1 - კახეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ kaxeti }}</span>
                </label>


                <select v-if="kaxeti === '1 - საგარეჯო'" class="form-select" id="satkeo">
                    <option v-for="item in sagarejoSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kaxeti === '2 - გურჯაანი'" class="form-select" id="satkeo">
                    <option v-for="item in gurjaaniSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kaxeti === '3 - ლაგოდეხი-დედოფლისწყარო-სიღნაღი'" class="form-select" id="satkeo">
                    <option v-for="item in lagodexiDedoflisWkaroSignaxiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kaxeti === '4 - ყვარელი'" class="form-select" id="satkeo">
                    <option v-for="item in kvareliSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kaxeti === '5 - თელავი'" class="form-select" id="satkeo">
                    <option v-for="item in telaviSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kaxeti === '6 - ახმეტა'" class="form-select" id="satkeo">
                    <option v-for="item in axmetaSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  ქვემო ქართლი -->
            <div v-if="administraciaSelect === '2 - ქვემო ქართლი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ kvemo_kartli }}</span>
                </label>

                <select v-if="kvemo_kartli === '1 - ბოლნისი-დმანისი'" class="form-select" id="satkeo">
                    <option v-for="item in bolnisiDmanisiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kvemo_kartli === '2 - გარდაბანი-მარნეული'" class="form-select" id="satkeo">
                    <option v-for="item in gardabaniMarneuliSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="kvemo_kartli === '3 - წალკა-თეთრიწყარო'" class="form-select" id="satkeo">
                    <option v-for="item in walkaTetriwkaroSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  შიდა ქართლი -->
            <div v-if="administraciaSelect === '3 - შიდა ქართლი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ shida_kartli }}</span>
                </label>

                <select v-if="shida_kartli === '1 - გორი'" class="form-select" id="satkeo">
                    <option v-for="item in goriSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="shida_kartli === '2 - კასპი'" class="form-select" id="satkeo">
                    <option v-for="item in kaspiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="shida_kartli === '3 - ქარელი'" class="form-select" id="satkeo">
                    <option v-for="item in kareliSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="shida_kartli === '4 - ხაშური'" class="form-select" id="satkeo">
                    <option v-for="item in xashuriSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  მცხეთა-მთიანეთი -->
            <div v-if="administraciaSelect === '4 - მცხეთა-მთიანეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ mcxeta_mtianeti }}</span>
                </label>

                <select v-if="mcxeta_mtianeti === '1 - მცხეთა'" class="form-select" id="satkeo">
                    <option v-for="item in mcxetaSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="mcxeta_mtianeti === '2 - თიანეთი'" class="form-select" id="satkeo">
                    <option v-for="item in tianetiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="mcxeta_mtianeti === '3 - ბარისახო'" class="form-select" id="satkeo">
                    <option v-for="item in barisaxoSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="mcxeta_mtianeti === '4 - ფასანაური'" class="form-select" id="satkeo">
                    <option v-for="item in fasanauriSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  იმერეთი -->
            <div v-if="administraciaSelect === '5 - იმერეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ mcxeta_mtianeti }}</span>
                </label>

                <select v-if="imereti === '1 - ხონი-წყალტუბო'" class="form-select" id="satkeo">
                    <option v-for="item in xoniWkaltuboSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '2 - ვანი-ბაღდათი'" class="form-select" id="satkeo">
                    <option v-for="item in vaniBagdatiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '3 - ჭიათურა'" class="form-select" id="satkeo">
                    <option v-for="item in chiaturaSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '4 - საჩხერე'" class="form-select" id="satkeo">
                    <option v-for="item in sachxereSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '5 - ტყიბული'" class="form-select" id="satkeo">
                    <option v-for="item in tkibuliSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '6 - ზესტაფონი'" class="form-select" id="satkeo">
                    <option v-for="item in zestafoniSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="imereti === '7 - ხარაგაული'" class="form-select" id="satkeo">
                    <option v-for="item in xaragauliSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  სამეგრელო-ზემო სვანეთი -->
            <div v-if="administraciaSelect === '6 - სამეგრელო-ზემო სვანეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ samegrelo_zemo_svaneti }}</span>
                </label>

                <select v-if="samegrelo_zemo_svaneti === '1 - მესტია'" class="form-select" id="satkeo">
                    <option v-for="item in mestiaSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samegrelo_zemo_svaneti === '2 - ხაიში'" class="form-select" id="satkeo">
                    <option v-for="item in xaishiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samegrelo_zemo_svaneti === '3 - კოლხეთი'" class="form-select" id="satkeo">
                    <option v-for="item in kolxetiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samegrelo_zemo_svaneti === '4 - ჩხოროწყუ'" class="form-select" id="satkeo">
                    <option v-for="item in chkorowkuSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samegrelo_zemo_svaneti === '5 - წალენჯიხა'" class="form-select" id="satkeo">
                    <option v-for="item in walenjixaSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samegrelo_zemo_svaneti === '6 - მარტვილი'" class="form-select" id="satkeo">
                    <option v-for="item in martviliSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  სამცხე-ჯავახეთი -->
            <div v-if="administraciaSelect === '7 - სამცხე-ჯავახეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ samcxe_javaxeti }}</span>
                </label>

                <select v-if="samcxe_javaxeti === '1 - ბორჯომი'" class="form-select" id="satkeo">
                    <option v-for="item in borjomiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samcxe_javaxeti === '2 - ბაკურიანი'" class="form-select" id="satkeo">
                    <option v-for="item in bakurianiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samcxe_javaxeti === '3 - ახალციხე'" class="form-select" id="satkeo">
                    <option v-for="item in axalcixeSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samcxe_javaxeti === '4 - ასპინძა-ახალქალაქი'" class="form-select" id="satkeo">
                    <option v-for="item in aspindaAxalcixeSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="samcxe_javaxeti === '5 - ადიგენი'" class="form-select" id="satkeo">
                    <option v-for="item in adigeniSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  რაჭა-ლეჩხუმი ქვემო სვანეთი -->
            <div v-if="administraciaSelect === '8 - რაჭა-ლეჩხუმი ქვემო სვანეთი'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ racha_lechxumi_kvemo_svaneti }}</span>
                </label>

                <select v-if="racha_lechxumi_kvemo_svaneti === '1 - ამბროლაური'" class="form-select" id="satkeo">
                    <option v-for="item in ambrolauriSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="racha_lechxumi_kvemo_svaneti === '2 - ონი'" class="form-select" id="satkeo">
                    <option v-for="item in oniSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="racha_lechxumi_kvemo_svaneti === '3 - ცაგერი'" class="form-select" id="satkeo">
                    <option v-for="item in cageriSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="racha_lechxumi_kvemo_svaneti === '4 - ლენტეხი'" class="form-select" id="satkeo">
                    <option v-for="item in lentexiSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>

            <!--  გურია -->
            <div v-if="administraciaSelect === '9 - გურია'">
                <label class="form-label text-truncate w-100" for="satkeo">
                    სატყეო: <span class="fw-bold">{{ guria }}</span>
                </label>

                <select v-if="guria === '1 - ჩოხატაური'" class="form-select" id="satkeo">
                    <option v-for="item in choxatauriSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="guria === '2 - ოზურგეთი'" class="form-select" id="satkeo">
                    <option v-for="item in ozurgetiSatkeo" :key="item">{{item.name}}</option>
                </select>

                <select v-if="guria === '3 - ლანჩხუთი'" class="form-select" id="satkeo">
                    <option v-for="item in lanchxutiSatkeo" :key="item">{{item.name}}</option>
                </select>
            </div>
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
        <div class="col-lg-3">
            <label class="form-label text-truncate w-100" for="shablonuri_komentari">
                "შაბლონური კომენტარი"
            </label>

            <select class="form-select" id="shablonuri_komentari" multiple aria-label="multiple select example">
                <option value="0">აირჩიე</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>

        <div class="col-12">
            <label class="text-truncate w-100" for="komentari_start">კომენტარი</label>
            <textarea class="form-control" rows="3" id="komentari_start"></textarea>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Maketi-start",

    data() {
        return {
            administraciaSelect: 'აირჩიეთ ადმინისტრაცია',
            kaxeti: '',
            kvemo_kartli: '',
            shida_kartli: '',
            mcxeta_mtianeti: '',
            imereti: '',
            samegrelo_zemo_svaneti: '',
            samcxe_javaxeti: '',
            racha_lechxumi_kvemo_svaneti: '',
            guria: ''
        }
    },

    computed: {
        ...mapGetters([
            'martvisOrgano',
            'administracia',
            'kaxetiSatkeoUbani',
            'kvemoKartliSatkeoUbani',
            'shidaKartliSatkeoUbani',
            'mcxetaMtianetiSatkeoUbani',
            'imeretiSatkeoUbani',
            'samegreloZemoSvanetiSatkeoUbani',
            'samcxeJavaxetiSatkeoUbani',
            'rachaLechxumiKvemoSvanetiSatkeoUbani',
            'guriaSatkeoUbani',
            'sagarejoSatkeo',
            'gurjaaniSatkeo',
            'lagodexiDedoflisWkaroSignaxiSatkeo',
            'kvareliSatkeo',
            'telaviSatkeo',
            'axmetaSatkeo',
            'bolnisiDmanisiSatkeo',
            'gardabaniMarneuliSatkeo',
            'walkaTetriwkaroSatkeo',
            'goriSatkeo',
            'kaspiSatkeo',
            'kareliSatkeo',
            'xashuriSatkeo',
            'mcxetaSatkeo',
            'tianetiSatkeo',
            'barisaxoSatkeo',
            'fasanauriSatkeo',
            'xoniWkaltuboSatkeo',
            'vaniBagdatiSatkeo',
            'chiaturaSatkeo',
            'sachxereSatkeo',
            'tkibuliSatkeo',
            'zestafoniSatkeo',
            'xaragauliSatkeo',
            'mestiaSatkeo',
            'xaishiSatkeo',
            'kolxetiSatkeo',
            'chkorowkuSatkeo',
            'walenjixaSatkeo',
            'martviliSatkeo',
            'borjomiSatkeo',
            'bakurianiSatkeo',
            'axalcixeSatkeo',
            'aspindaAxalcixeSatkeo',
            'adigeniSatkeo',
            'ambrolauriSatkeo',
            'oniSatkeo',
            'cageriSatkeo',
            'lentexiSatkeo',
            'choxatauriSatkeo',
            'ozurgetiSatkeo',
            'lanchxutiSatkeo'
        ]),
    }
}
</script>

<style scoped>

</style>