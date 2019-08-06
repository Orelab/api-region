

<template>

    <div class="row">

        <div class="col-md-6" v-if="regions.length > 0">
            
            <h3>Région</h3>
            <select class="form-control" v-on:change="openDepartments">
                <option v-for="r in regions" v-bind:value="r.code">{{ r.nom }}</option>
            </select>

            <h3>Département</h3>
            <ul class="list-group">
                <li class="list-group-item" v-for="d in departements"
                    v-on:click="openCommunes(d)">{{ d.code }} - {{ d.nom }}</li>
            </ul>
        </div>

        <div class="col-md-6" v-if="communes.length > 0">
            <h3>Communes</h3>
            <ul class="list-group">
                <geo-list 
                    v-for="c in communes"
                    v-bind:name="c.codesPostaux[0] +' - '+ c.nom" 
                ></geo-list>
            </ul>
        </div>
    </div>

</template>

