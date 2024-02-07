"use client";

import React from "react";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-2">
      <div className="flex flex-col mx-auto max-w-screen-lg text-center gap-y-12">
        <div>
        <Typography variant="h3" className="mt-8 mb-6 font-inter text-parchment-200">
        Entdecken Sie ganzheitliche Heilung für Körper und Geist
        </Typography>

        <Typography className="my-10 font-normal !text-gray-300 font-inter">
        Der Alltag kann an den Kräften zehren und sowohl körperliche als auch emotionale Beschwerden verursachen. Meine Craniosacrale Körperarbeit bietet eine sanfte, aber äußerst wirkungsvolle Methode zur Linderung von Blockaden im Körper und zur Wiederherstellung der inneren Balance.
        </Typography>
        </div>
        
        <div>
        <Typography variant="lead" className="mt-8 mb-6 font-inter">
        Wie kann Ihnen die Craniosacrale Körperarbeit helfen?
        </Typography>

        <Typography className="my-12 px-20 font-normal text-gray-300 font-inter">
        <ul>
            <li><strong>Schmerzerkrankungen:</strong> Kopf-, Migräne- und Nackenschmerzen, Rücken- und Gelenkschmerzen.</li>
            <li><strong>Belastende Situationen:</strong> Ängste, Traumata, Stress.</li>
            <li><strong>Schlaflosigkeit und Verdauungsstörungen.</strong></li>
            <li><strong>Muskuläre Verspannungen.</strong></li>
            <li><strong>Tinnitus und Ohrgeräusche.</strong></li>
            <li><strong>Psychosomatische Beschwerden.</strong></li>
            <li><strong>Harmonisierung bei Hyperaktivität und Konzentrationsschwierigkeiten.</strong></li>
        </ul>
        </Typography>

        <Typography className="my-10 font-normal !text-gray-300 font-inter">
        Die Craniosacrale Arbeit geht über rein körperliche Beschwerden hinaus und spricht auch emotionale Themen an, die im Zellgedächtnis gespeichert sind. Dies ermöglicht tiefgreifende und nachhaltige Veränderungen im Leben.
        </Typography>
        </div>
        
        <div>
        <Typography variant="lead" className="mt-8 mb-6 font-inter">
        Warum Craniosacrale Körperarbeit?
        </Typography>

        <Typography className="my-12 font-normal !text-gray-300 font-inter">
        <ul>
            <li><strong>Sanfte Methode:</strong> Effektive Linderung durch behutsame Berührungen.</li>
            <li><strong>Ganzheitlicher Ansatz:</strong> Wirkt nicht nur auf physischer Ebene, sondern auch auf emotionale Belastungen.</li>
            <li><strong>Vielseitige Unterstützung:</strong> Von Schmerzen bis zu psychosomatischen Beschwerden.</li>
            <li><strong>Stressreduktion:</strong> Entspannung für Körper und Geist.</li>
        </ul>
        </Typography>

        <Typography className="my-10 font-normal !text-gray-300 font-inter">
        Wir laden Sie ein, die transformative Kraft der Craniosacralen Körperarbeit zu erleben und Ihr Wohlbefinden auf allen Ebenen zu fördern. Vereinbaren Sie noch heute einen Termin und investieren Sie in Ihre Gesundheit!
        </Typography>
        </div>
        
      </div>
    </section>
  );
}

export default Content;
