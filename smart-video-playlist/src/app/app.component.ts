import { Component } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tutorial for this here: https://www.toptal.com/angular-js/angular-video-player-videogular
  title = 'smart-video-playlist';

  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];

  api: VgAPI;
  currentIndex = 0;
  currentItem: IMedia = this.playlist[ this.currentIndex ];

  onClickPlaylistItem(item: IMedia, index) {
      this.currentIndex = index;
      this.currentItem = item;
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    // subscribe to the loaded event and play the video
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.playVideo.bind(this)
    );
    // subscribe to the ended event and play the next
    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      this.nextVideo.bind(this)
    );
  }

  playVideo() {
    this.api.play();
  }

  nextVideo() {
    this.currentIndex++;
    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }
    this.currentItem = this.playlist[this.currentIndex];
  }
}
