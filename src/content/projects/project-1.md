---
title: "滞在ウォッチ"
description: "BLEビーコン、スマホビーコンを活用した在室管理システム"
image:
  url: "/images/staywatch-system.png"
  alt: "GitHub wallpaper"
worksImage1:
  url: "/images/staywatch-system.png"
  alt: "first image of your project."
worksImage2:
  url: "/.netlify/images?url=/images/image-2.webp"
  alt: "second image of your project."
platform: Web,Mobile
stack: TypeScript,Go,Kotlin,Python,Blue Tooth Low Energy
website: https://staywatch.kajilab.net/
github: https://github.com/kajiLabTeam/stay-watch-front
---

滞在ウォッチは、BLEビーコンとスマートフォンアプリを活用した在室者管理システムです。
利用者がビーコンを携帯するかスマートフォンアプリを起動するだけで、手動入力なしに
「誰がどこにいるか」をリアルタイムで自動記録します。
システムは利用者が持つBLEビーコンまたはスマートフォンアプリ、
各部屋に設置されたRaspberry Piベースの受信機、中央サーバから構成されています。
ビーコンやアプリが発信する電波をRaspberry Piの受信機が検出し、
検出したビーコンIDと電波強度をサーバに送信します。
サーバでは事前に登録された利用者情報とビーコンIDを照合し、入退室時刻と場所を自動的に記録します。
ハードウェアビーコンとKotlinで開発したAndroidアプリのハイブリッド構成を採用し、利用者の好みや状況に応じて選択できます。
また管理システムが存在しておりコミュニティごとに独立した運用を可能が可能です
記録された在室情報はWeb APIを通じて外部システムから利用でき、
フロアマップでのリアルタイム可視化、LINE BOTとの連携、滞在時間の統計表示など様々な応用が可能です。
また機器トラブル時の自動復旧機能により、管理者の負担を軽減しながら安定した運用を実現しています。
本システムにより、研究室やオフィスでのコミュニケーション促進と効率的な空間管理を支援できます。
