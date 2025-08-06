import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArcadeService {
 arcadeData = {
    'how-it-works': {
      url: 'https://demo.arcade.software/HMlCYv4JUwrrPvM5gWdh?embed&embed_custom&show_copy_link=true',
      title: 'Drawing Register',
      paddingBottom: 'calc(53.05555555555556% + 41px)'
    },
    'share-with-ease': {
      url: 'https://demo.arcade.software/q3ljBAe20fkamvJlAFw9?embed&embed_custom&show_copy_link=true',
      title: 'Share with Ease',
      paddingBottom: 'calc(53.05555555555556% + 41px)'
    },
    'track-submissions': {
      url: 'https://demo.arcade.software/CohctwiMruoSprQ9fPZt?embed&embed_custom&show_copy_link=true',
      title: 'Track your submissions',
      paddingBottom: 'calc(52.38095238095239% + 41px)'
    },
    'project-workflow': {
      url: 'https://demo.arcade.software/aW0I7RdSGRqzvCWe4lRI?embed&embed_custom&show_copy_link=true',
      title: 'Effortless Project Workflow and Approval Tracking',
      paddingBottom: 'calc(51.724137931034484% + 41px)'
    },
    'view-files-comment': {
      url: 'https://demo.arcade.software/BUoNDbLf7WRYss33qS2J?embed&embed_custom&show_copy_link=true',
      title: 'View files and comment',
      paddingBottom: 'calc(51.724137931034484% + 41px)'
    }
  };
  constructor() { }
}
