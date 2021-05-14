import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Uses() {
  return (
    <div>
      <Head>
        <title>Brandon Leichty | Uses</title>
      </Head>
      <div className="heading uses">
        <h1>Uses</h1>
      </div>
      <div className="desk-image-wrapper">
        <div className="desk-image">
          <Image
            src="/images/desksetup.jpeg"
            alt="Picture of Brandon's desk setup"
            width={960}
            height={720}
            priority={true}
            className="rounded-lg"
          />
        </div>
      </div>
      <main className="layout-wrapper">
        <div class="uses-wrapper">
          <div class="resource-section-heading">
            <h3 class="mb-8 mt-16 text-5xl font-medium text-purple dark:text-baby-blue">
              Desk Setup
            </h3>
            <ul class="space-y-6 dark:text-favWhite">
              <li>
                2019 16" MacBook Pro 2.3 GHz 8-Core Intel Core i9 with 64gb
                memory
              </li>
              <li>Twelve South Curve - Matte White</li>
              <li>IKEA BEKANT desk (white stained oak)</li>
              <li>Grovemade Wool Felt Desk Pad (light felt)</li>
              <li>Tomons Swing Arm Desk Lamp</li>
              <li>Logitech MX Master 2S Mouse</li>
            </ul>
          </div>
          <div class="resource-section-heading">
            <h3 class="mb-8 mt-16 text-5xl font-medium text-purple dark:text-baby-blue">
              Desktop Apps
            </h3>
            <ul class="space-y-6 dark:text-favWhite">
              <li>Table Plus</li>
              <li>RunJS</li>
              <li>Sketch</li>
              <li>Things</li>
            </ul>
          </div>
          <div class="resource-section-heading">
            <h3 class="mb-8 mt-16 text-5xl font-medium text-purple dark:text-baby-blue">
              Editor + Terminal
            </h3>
            <ul class="space-y-6 dark:text-favWhite">
              <li>VS Code</li>
              <li>Font: Fira Code</li>
              <li>Theme: Retreon</li>
            </ul>
          </div>
          <div class="resource-section-heading">
            <h3 class="mb-8 mt-16 text-5xl font-medium text-purple dark:text-baby-blue">
              Backpacks
            </h3>
            <ul class="space-y-6 dark:text-favWhite">
              <li>Topo Klettersack</li>
              <li>Topo Roverpack</li>
            </ul>
          </div>
          <div className="topo-image-wrapper">
            <div className="desk-image">
              <Image
                src="/images/topo-bags.jpeg"
                alt="Picture Topo backpacks on Brandon's office wall"
                width={720}
                height={960}
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
