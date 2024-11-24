<template>
    <ion-page>
    <ion-header>
    <ion-toolbar>
    <ion-title>Activity 2</ion-title>
    </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <ion-card>
        <ion-card-header>
          <ion-card-title>THE MAN,THE MYTH,THE LEGEND, ED ROTHAYLOR!!!</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
       <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
      <ion-card>
       <img src="https://i.pinimg.com/736x/2d/3f/27/2d3f27c61dc171d52a63216dba4e3efa.jpg" />
        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
    </ion-content>
    </ion-page>
    </template>
    <script lang="ts">
    
    import { defineComponent } from 'vue';
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';
    
    export default defineComponent({
        name: "IndexScreen",
        components: { IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter }
        });
    
        </script>