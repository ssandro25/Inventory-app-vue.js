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
            <label class="form-label text-truncate w-100" for="soil_category">
                1.1 მიწის კატეგორია
            </label>

            <select class="form-select" id="soil_category" :disabled="empty_layout_one">
                <option selected>აირჩიეთ</option>
                <option v-for="item in miwisKategoria" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-6 mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="xs">1.2 ხს</label>

            <select class="form-select" id="xs" :disabled="empty_layout_one">
                <option selected>აირჩიეთ</option>
                <option v-for="item in xs" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-6 mt-3">
            <label class="form-label text-truncate w-100" for="gfdu">1.3 გ.ფ.დ.უ.</label>

            <select class="form-select" id="gfdu" :disabled="empty_layout_one">
                <option selected>აირჩიეთ</option>
                <option v-for="item in gfdu" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="exposure">1.4 ექსპოზიცია</label>

            <select class="form-select" id="exposure" :disabled="empty_layout_one">
                <option selected>აირჩიეთ</option>
                <option v-for="item in ekspozicia" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="slope">1.5 დაქანება</label>

            <select v-model="selectedItem.id" @change="updateSelectedItem" class="form-select" id="slope" :disabled="empty_layout_one">
                <option selected>აირჩიეთ</option>
                <option v-for="item in dakaneba" :key="item" :value="item.id">{{item.name}}</option>
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
                <option v-for="item in eroziisSaxe" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="erosion_degree">1.8 ეროზიის
                ხარისხი
            </label>

            <select class="form-select" id="erosion_degree" :disabled="empty_layout_one">
                <option selected>ეროზიის სახე</option>
                <option v-for="item in eroziisXarisxi" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col-md-3 mt-3">
            <label class="form-label text-truncate w-100" for="area">1.9 ფართობი</label>

            <input type="number" class="form-control" id="area" :disabled="empty_layout_one"/>
        </div>

        <div>{{ selectedItem.name }}</div>

    </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'Maketi-1',

    computed: {
        ...mapGetters([
            'miwisKategoria',
            'xs',
            'gfdu',
            'ekspozicia',
            'dakaneba',
            'eroziisSaxe',
            'eroziisXarisxi'
        ]),
    },

    methods: {
        updateSelectedItem() {
            const selectedItem = this.dakaneba.find(item => item.id === this.selectedItem.id);
            this.selectedItem.name = selectedItem ? selectedItem.name : null;
            this.$store.commit('setDakanebisName', selectedItem.name)
        },
    },

    data() {
        return {
            empty_layout_one: false,
            selectedItem: { id: null, name: null },
        }
    },


}
</script>

