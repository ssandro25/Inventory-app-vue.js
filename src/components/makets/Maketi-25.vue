<template>
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
</template>

<script setup></script>