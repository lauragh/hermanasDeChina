import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly supabaseService = inject(SupabaseService);
  profiles: any[] = [];

  async ngOnInit() {
    this.profiles = await this.supabaseService.getProfiles();
  }
}
